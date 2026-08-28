import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AlertTriangle, ArrowLeft, Hash, Search, Send, Trash2, X } from 'lucide-react';
import { SystemUser, fetchUsers } from '../services/api';
import { DEFAULT_AVATAR } from '../utils/avatar';
import { isOnline } from '../services/progressSync';
import {
  CHANNELS,
  ChannelMessage,
  ChannelSummary,
  ChatMessage,
  ChatPerson,
  Conversation,
  RETENTION_DAYS,
  channelHasUnread,
  clearChannel,
  clearConversation,
  conversationId,
  hasUnread,
  markChannelRead,
  markRead,
  messageTime,
  observeChannelMessages,
  observeMessages,
  sendChannelMessage,
  sendMessage
} from '../services/chat';

interface ChatPanelProps {
  me: ChatPerson;
  conversations: Conversation[];
  channels: ChannelSummary[];
  /** Presença de cada pessoa, para mostrar quem está disponível. */
  presence: Record<string, string | undefined>;
  onClose: () => void;
  onChannelsRead: () => void;
  /** Limpar um canal apaga a conversa de todo o sistema: restrito a Líder ou acima. */
  canClearChannel: boolean;
}

/** O que está aberto: um canal de grupo ou a conversa com uma pessoa. */
type Aberto =
  | { tipo: 'canal'; id: string; nome: string }
  | { tipo: 'pessoa'; pessoa: ChatPerson }
  | null;

export const ChatPanel: React.FC<ChatPanelProps> = ({
  me,
  conversations,
  channels,
  presence,
  onClose,
  onChannelsRead,
  canClearChannel
}) => {
  const [pessoas, setPessoas] = useState<SystemUser[]>([]);
  const [busca, setBusca] = useState('');
  const [aberto, setAberto] = useState<Aberto>(null);
  const [mensagens, setMensagens] = useState<(ChatMessage | ChannelMessage)[]>([]);
  const [texto, setTexto] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [falha, setFalha] = useState<string | null>(null);
  const [confirmandoLimpeza, setConfirmandoLimpeza] = useState(false);
  const [limpando, setLimpando] = useState(false);
  const fimDaLista = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ativo = true;

    fetchUsers().then(({ users }) => {
      if (ativo) setPessoas(users.filter((pessoa) => pessoa.id !== me.id));
    });

    return () => {
      ativo = false;
    };
  }, [me.id]);

  // Mensagens do que está aberto, em tempo real.
  useEffect(() => {
    if (!aberto) {
      setMensagens([]);
      return;
    }

    if (aberto.tipo === 'canal') {
      markChannelRead(aberto.id, me.id);
      onChannelsRead();

      return observeChannelMessages(aberto.id, (lista) => {
        setMensagens(lista);
        markChannelRead(aberto.id, me.id);
        onChannelsRead();
      });
    }

    const id = conversationId(me.id, aberto.pessoa.id);
    void markRead(id, me.id);

    return observeMessages(id, (lista) => {
      setMensagens(lista);
      void markRead(id, me.id);
    });
  }, [aberto, me.id, onChannelsRead]);

  useEffect(() => {
    fimDaLista.current?.scrollIntoView({ block: 'end' });
  }, [mensagens]);

  const enviar = async () => {
    if (!aberto || !texto.trim()) return;

    setEnviando(true);
    setFalha(null);

    try {
      if (aberto.tipo === 'canal') await sendChannelMessage(aberto.id, me, texto);
      else await sendMessage(me, aberto.pessoa, texto);
      setTexto('');
    } catch (err) {
      setFalha((err as Error).message || 'Não foi possível enviar a mensagem.');
    } finally {
      setEnviando(false);
    }
  };

  const limparMensagens = async () => {
    if (!aberto) return;

    setLimpando(true);
    setFalha(null);

    try {
      if (aberto.tipo === 'canal') await clearChannel(aberto.id);
      else await clearConversation(conversationId(me.id, aberto.pessoa.id));
      setConfirmandoLimpeza(false);
    } catch (err) {
      setFalha((err as Error).message || 'Não foi possível limpar as mensagens.');
    } finally {
      setLimpando(false);
    }
  };

  // Trocar de conversa cancela uma confirmação pendente.
  useEffect(() => setConfirmandoLimpeza(false), [aberto]);

  const podeLimpar = aberto?.tipo === 'canal' ? canClearChannel : Boolean(aberto);

  const listadas = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    const comConversa = new Set(
      conversations.flatMap((conversa) => conversa.participants.filter((id) => id !== me.id))
    );

    return pessoas
      .filter(
        (pessoa) =>
          !termo ||
          pessoa.name.toLowerCase().includes(termo) ||
          pessoa.email.toLowerCase().includes(termo)
      )
      .sort((a, b) => {
        const pesoA = comConversa.has(a.id) ? 0 : 1;
        const pesoB = comConversa.has(b.id) ? 0 : 1;
        return pesoA - pesoB || a.name.localeCompare(b.name, 'pt-BR');
      });
  }, [pessoas, busca, conversations, me.id]);

  const resumoDe = (pessoaId: string): Conversation | undefined =>
    conversations.find((conversa) => conversa.id === conversationId(me.id, pessoaId));

  const tituloAberto =
    aberto?.tipo === 'canal' ? aberto.nome : aberto?.tipo === 'pessoa' ? aberto.pessoa.name : '';

  return (
    <aside className="chat-panel">
      <header className="chat-head">
        {aberto ? (
          <>
            <button
              type="button"
              className="chat-icon"
              onClick={() => setAberto(null)}
              aria-label="Voltar"
            >
              <ArrowLeft size={17} />
            </button>
            <div className="chat-head-person">
              <strong>
                {aberto.tipo === 'canal' && <Hash size={14} />} {tituloAberto}
              </strong>
              {aberto.tipo === 'canal' ? (
                <span>Visível para todos do sistema</span>
              ) : (
                isOnline(presence[aberto.pessoa.id]) && <span className="chat-online">online</span>
              )}
            </div>
          </>
        ) : (
          <div className="chat-head-person">
            <strong>Mensagens</strong>
            <span>As mensagens somem após {RETENTION_DAYS} dias</span>
          </div>
        )}

        {aberto && podeLimpar && (
          <button
            type="button"
            className="chat-icon"
            onClick={() => setConfirmandoLimpeza(true)}
            title="Limpar mensagens"
            aria-label="Limpar mensagens"
          >
            <Trash2 size={16} />
          </button>
        )}

        <button type="button" className="chat-icon" onClick={onClose} aria-label="Fechar">
          <X size={17} />
        </button>
      </header>

      {aberto ? (
        <>
          {confirmandoLimpeza && (
            <div className="chat-confirma">
              <AlertTriangle size={15} />
              <span>
                {aberto.tipo === 'canal'
                  ? 'Apagar todas as mensagens deste canal? Todos perdem o histórico.'
                  : 'Apagar todas as mensagens desta conversa? As duas pessoas perdem o histórico.'}
              </span>
              <div>
                <button type="button" className="btn-ghost" onClick={() => setConfirmandoLimpeza(false)}>
                  Cancelar
                </button>
                <button
                  type="button"
                  className="btn-primary"
                  disabled={limpando}
                  onClick={() => void limparMensagens()}
                >
                  {limpando ? 'Limpando...' : 'Apagar'}
                </button>
              </div>
            </div>
          )}

          <div className="chat-mensagens">
            {mensagens.length === 0 ? (
              <p className="chat-vazio">
                {aberto.tipo === 'canal'
                  ? 'Nenhuma mensagem no canal ainda. Comece a conversa.'
                  : 'Nenhuma mensagem ainda. Diga olá.'}
              </p>
            ) : (
              mensagens.map((mensagem) => {
                const minha = mensagem.from === me.id;
                const autor = (mensagem as ChannelMessage).fromName;

                return (
                  <div key={mensagem.id} className={`chat-bolha ${minha ? 'minha' : ''}`}>
                    {aberto.tipo === 'canal' && !minha && autor && (
                      <b className="chat-autor">{autor}</b>
                    )}
                    <span>{mensagem.text}</span>
                    <em>{messageTime(mensagem.createdAt)}</em>
                  </div>
                );
              })
            )}
            <div ref={fimDaLista} />
          </div>

          {falha && <p className="chat-falha">{falha}</p>}

          <footer className="chat-envio">
            <input
              value={texto}
              onChange={(event) => setTexto(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' && !event.shiftKey) {
                  event.preventDefault();
                  void enviar();
                }
              }}
              placeholder={
                aberto.tipo === 'canal'
                  ? `Mensagem em ${tituloAberto}`
                  : `Mensagem para ${tituloAberto.split(' ')[0]}`
              }
              maxLength={2000}
            />
            <button
              type="button"
              className="btn-primary"
              onClick={() => void enviar()}
              disabled={enviando || !texto.trim()}
              aria-label="Enviar"
            >
              <Send size={15} />
            </button>
          </footer>
        </>
      ) : (
        <>
          {/* Canais abertos a todo o sistema. */}
          <div className="chat-secao">
            <span className="chat-secao-titulo">Canais</span>

            {CHANNELS.map((canal) => {
              const resumo = channels.find((item) => item.id === canal.id);
              const nova = channelHasUnread(resumo, me.id);

              return (
                <button
                  key={canal.id}
                  type="button"
                  className={`chat-item ${nova ? 'nova' : ''}`}
                  onClick={() => setAberto({ tipo: 'canal', id: canal.id, nome: canal.name })}
                >
                  <div className="chat-canal-icone">
                    <Hash size={16} />
                  </div>

                  <div className="chat-item-texto">
                    <strong>{canal.name}</strong>
                    <span>{resumo?.lastMessage || canal.description}</span>
                  </div>

                  {nova && <span className="chat-badge" />}
                </button>
              );
            })}
          </div>

          <div className="chat-secao">
            <span className="chat-secao-titulo">Conversas</span>

            <div className="chat-busca">
              <Search size={14} />
              <input
                value={busca}
                onChange={(event) => setBusca(event.target.value)}
                placeholder="Buscar pessoa"
              />
            </div>
          </div>

          <div className="chat-lista">
            {listadas.length === 0 ? (
              <p className="chat-vazio">Ninguém encontrado.</p>
            ) : (
              listadas.map((pessoa) => {
                const conversa = resumoDe(pessoa.id);
                const naoLida = conversa ? hasUnread(conversa, me.id) : false;

                return (
                  <button
                    key={pessoa.id}
                    type="button"
                    className={`chat-item ${naoLida ? 'nova' : ''}`}
                    onClick={() =>
                      setAberto({
                        tipo: 'pessoa',
                        pessoa: { id: pessoa.id, name: pessoa.name, avatarUrl: pessoa.avatarUrl }
                      })
                    }
                  >
                    <div className="chat-avatar">
                      <img src={pessoa.avatarUrl || DEFAULT_AVATAR} alt={pessoa.name} />
                      {isOnline(presence[pessoa.id]) && <i className="chat-ponto" />}
                    </div>

                    <div className="chat-item-texto">
                      <strong>{pessoa.name}</strong>
                      <span>{conversa?.lastMessage || pessoa.email}</span>
                    </div>

                    {naoLida && <span className="chat-badge" />}
                  </button>
                );
              })
            )}
          </div>
        </>
      )}
    </aside>
  );
};
