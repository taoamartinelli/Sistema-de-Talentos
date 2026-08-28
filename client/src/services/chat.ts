import {
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  where
} from 'firebase/firestore';
import { db } from './firebase';

/** Mensagens vivem 30 dias; a política de TTL do Firestore as apaga sozinha. */
const RETENTION_DAYS = 30;

const CONVERSAS = 'conversas';
const MENSAGENS = 'mensagens';

export interface ChatMessage {
  id: string;
  from: string;
  text: string;
  createdAt: string;
}

export interface Conversation {
  id: string;
  participants: string[];
  names: Record<string, string>;
  avatars: Record<string, string>;
  lastMessage: string;
  lastMessageAt: string;
  lastMessageFrom: string;
  lastReadBy: Record<string, string>;
}

export interface ChatPerson {
  id: string;
  name: string;
  avatarUrl?: string;
}

/** Id estável para o par, independente de quem iniciou a conversa. */
export function conversationId(a: string, b: string): string {
  return [a, b].sort().join('__');
}

function expiration(): Timestamp {
  const limite = new Date();
  limite.setDate(limite.getDate() + RETENTION_DAYS);
  return Timestamp.fromDate(limite);
}

/**
 * Abre (ou reaproveita) a conversa entre duas pessoas.
 * Grava com merge para não precisar ler antes: uma leitura a menos e
 * nenhum problema com documento que ainda não existe.
 */
export async function openConversation(eu: ChatPerson, outro: ChatPerson): Promise<string> {
  const id = conversationId(eu.id, outro.id);

  await setDoc(
    doc(db, CONVERSAS, id),
    {
      participants: [eu.id, outro.id],
      names: { [eu.id]: eu.name, [outro.id]: outro.name },
      avatars: {
        ...(eu.avatarUrl ? { [eu.id]: eu.avatarUrl } : {}),
        ...(outro.avatarUrl ? { [outro.id]: outro.avatarUrl } : {})
      },
      expiresAt: expiration()
    },
    { merge: true }
  );

  return id;
}

/** Envia uma mensagem e atualiza o resumo da conversa. */
export async function sendMessage(
  eu: ChatPerson,
  outro: ChatPerson,
  text: string
): Promise<void> {
  const conteudo = text.trim();
  if (!conteudo) return;

  const id = await openConversation(eu, outro);
  const agora = new Date().toISOString();

  await addDoc(collection(db, CONVERSAS, id, MENSAGENS), {
    from: eu.id,
    // Guardado na mensagem para as regras de segurança não precisarem
    // consultar a conversa a cada leitura.
    participants: [eu.id, outro.id],
    text: conteudo,
    createdAt: agora,
    expiresAt: expiration()
  });

  await setDoc(
    doc(db, CONVERSAS, id),
    {
      participants: [eu.id, outro.id],
      names: { [eu.id]: eu.name, [outro.id]: outro.name },
      lastMessage: conteudo,
      lastMessageAt: agora,
      lastMessageFrom: eu.id,
      lastReadBy: { [eu.id]: agora },
      expiresAt: expiration()
    },
    { merge: true }
  );
}

/** Marca a conversa como lida por quem está com ela aberta. */
export async function markRead(conversaId: string, userId: string): Promise<void> {
  try {
    await setDoc(
      doc(db, CONVERSAS, conversaId),
      { lastReadBy: { [userId]: new Date().toISOString() } },
      { merge: true }
    );
  } catch {
    /* falha ao marcar leitura não impede a conversa */
  }
}

/** Acompanha em tempo real as conversas da pessoa. */
export function observeConversations(
  userId: string,
  onChange: (conversas: Conversation[]) => void
): () => void {
  const consulta = query(
    collection(db, CONVERSAS),
    where('participants', 'array-contains', userId)
  );

  return onSnapshot(
    consulta,
    (snapshot) => {
      const lista = snapshot.docs.map((documento) => ({
        id: documento.id,
        ...(documento.data() as Omit<Conversation, 'id'>)
      }));

      // Ordenado aqui para não exigir índice composto no Firestore.
      lista.sort((a, b) => (b.lastMessageAt ?? '').localeCompare(a.lastMessageAt ?? ''));
      onChange(lista);
    },
    (err) => console.warn('Não foi possível acompanhar as conversas:', err)
  );
}

/** Acompanha em tempo real as mensagens de uma conversa. */
export function observeMessages(
  conversaId: string,
  onChange: (mensagens: ChatMessage[]) => void
): () => void {
  const consulta = query(
    collection(db, CONVERSAS, conversaId, MENSAGENS),
    orderBy('createdAt', 'asc')
  );

  return onSnapshot(
    consulta,
    (snapshot) => {
      onChange(
        snapshot.docs.map((documento) => ({
          id: documento.id,
          ...(documento.data() as Omit<ChatMessage, 'id'>)
        }))
      );
    },
    (err) => console.warn('Não foi possível acompanhar as mensagens:', err)
  );
}

/** True quando há mensagem do outro mais nova que a última leitura. */
export function hasUnread(conversa: Conversation, userId: string): boolean {
  if (!conversa.lastMessageAt || conversa.lastMessageFrom === userId) return false;

  const lida = conversa.lastReadBy?.[userId] ?? '';
  return conversa.lastMessageAt > lida;
}

/** Hora da mensagem, no formato curto usado nas bolhas. */
export function messageTime(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '';

  return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

export { RETENTION_DAYS };

/* ------------------------------ Canais de grupo ----------------------------- */

const CANAIS = 'canais';

export interface Channel {
  id: string;
  name: string;
  description: string;
}

/** Canais abertos a todo o sistema. */
export const CHANNELS: Channel[] = [
  { id: 'duvidas', name: 'Dúvidas', description: 'Pergunte sobre conteúdos, trilhas e simulados' },
  { id: 'bate-papo', name: 'Bate-papo', description: 'Conversa livre entre todos' }
];

export interface ChannelMessage extends ChatMessage {
  fromName: string;
  fromAvatar?: string;
}

export interface ChannelSummary {
  id: string;
  lastMessage: string;
  lastMessageAt: string;
  lastMessageFrom: string;
}

/** Envia uma mensagem para um canal aberto. */
export async function sendChannelMessage(
  canalId: string,
  eu: ChatPerson,
  text: string
): Promise<void> {
  const conteudo = text.trim();
  if (!conteudo) return;

  const agora = new Date().toISOString();

  await addDoc(collection(db, CANAIS, canalId, MENSAGENS), {
    from: eu.id,
    fromName: eu.name,
    ...(eu.avatarUrl ? { fromAvatar: eu.avatarUrl } : {}),
    text: conteudo,
    createdAt: agora,
    expiresAt: expiration()
  });

  await setDoc(
    doc(db, CANAIS, canalId),
    { lastMessage: conteudo, lastMessageAt: agora, lastMessageFrom: eu.id },
    { merge: true }
  );
}

export function observeChannelMessages(
  canalId: string,
  onChange: (mensagens: ChannelMessage[]) => void
): () => void {
  const consulta = query(
    collection(db, CANAIS, canalId, MENSAGENS),
    orderBy('createdAt', 'asc')
  );

  return onSnapshot(
    consulta,
    (snapshot) => {
      onChange(
        snapshot.docs.map((documento) => ({
          id: documento.id,
          ...(documento.data() as Omit<ChannelMessage, 'id'>)
        }))
      );
    },
    (err) => console.warn('Não foi possível acompanhar o canal:', err)
  );
}

/** Resumo dos canais, para mostrar a última mensagem e o aviso de novidade. */
export function observeChannels(onChange: (canais: ChannelSummary[]) => void): () => void {
  return onSnapshot(
    collection(db, CANAIS),
    (snapshot) => {
      onChange(
        snapshot.docs.map((documento) => ({
          id: documento.id,
          ...(documento.data() as Omit<ChannelSummary, 'id'>)
        }))
      );
    },
    (err) => console.warn('Não foi possível acompanhar os canais:', err)
  );
}

// A leitura de canal fica no navegador: é preferência de exibição, não progresso.
const canalLidoKey = (canalId: string, userId: string) => `zello:canal-lido:${canalId}:${userId}`;

export function markChannelRead(canalId: string, userId: string): void {
  try {
    localStorage.setItem(canalLidoKey(canalId, userId), new Date().toISOString());
  } catch {
    /* modo privado: o aviso de novidade some ao reabrir */
  }
}

export function channelHasUnread(resumo: ChannelSummary | undefined, userId: string): boolean {
  if (!resumo?.lastMessageAt || resumo.lastMessageFrom === userId) return false;

  try {
    const lida = localStorage.getItem(canalLidoKey(resumo.id, userId)) ?? '';
    return resumo.lastMessageAt > lida;
  } catch {
    return true;
  }
}

/* ------------------------------ Limpar mensagens ---------------------------- */

/** Apaga todas as mensagens de uma conversa e zera o resumo. */
export async function clearConversation(conversaId: string): Promise<void> {
  const mensagens = await getDocs(collection(db, CONVERSAS, conversaId, MENSAGENS));
  await Promise.all(mensagens.docs.map((documento) => deleteDoc(documento.ref)));

  await setDoc(
    doc(db, CONVERSAS, conversaId),
    { lastMessage: '', lastMessageAt: new Date(0).toISOString(), lastMessageFrom: '' },
    { merge: true }
  );
}

/** Apaga todas as mensagens de um canal e zera o resumo. */
export async function clearChannel(canalId: string): Promise<void> {
  const mensagens = await getDocs(collection(db, CANAIS, canalId, MENSAGENS));
  await Promise.all(mensagens.docs.map((documento) => deleteDoc(documento.ref)));

  await setDoc(
    doc(db, CANAIS, canalId),
    { lastMessage: '', lastMessageAt: new Date(0).toISOString(), lastMessageFrom: '' },
    { merge: true }
  );
}
