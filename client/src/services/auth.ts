import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  type User as FirebaseUser
} from 'firebase/auth';
import { auth } from './firebase';
import { User } from '../types';
import { formatPersonName } from '../utils/formatName';

export interface AuthResult {
  success: boolean;
  user?: User;
  token?: string;
  message?: string;
}

// Traduz os códigos de erro do Firebase para mensagens da interface.
const ERROR_MESSAGES: Record<string, string> = {
  'auth/invalid-email': 'E-mail inválido.',
  'auth/user-disabled': 'Este usuário está desativado. Fale com o suporte.',
  'auth/user-not-found': 'Usuário não encontrado.',
  'auth/wrong-password': 'E-mail ou senha incorretos.',
  'auth/invalid-credential': 'E-mail ou senha incorretos.',
  'auth/too-many-requests': 'Muitas tentativas. Aguarde alguns minutos e tente novamente.',
  'auth/network-request-failed': 'Falha de conexão. Verifique sua internet.',
  'auth/operation-not-allowed': 'Login por e-mail/senha não está habilitado no projeto Firebase.',
  'auth/email-already-in-use': 'Já existe uma conta com este e-mail.',
  'auth/weak-password': 'A senha precisa ter pelo menos 6 caracteres.',
  'auth/missing-password': 'Informe uma senha.',
  'auth/requires-recent-login': 'Por segurança, faça login novamente antes de alterar estes dados.',
  'auth/invalid-new-email': 'O novo e-mail é inválido.',
  'auth/unauthorized-continue-uri': 'Domínio não autorizado no Firebase Auth.'
};

export function describeError(err: unknown): string {
  const code = (err as { code?: string })?.code ?? '';
  const raw = (err as { message?: string })?.message ?? '';

  // Mantém o erro cru no console — sem isso, códigos não mapeados viram
  // uma mensagem genérica e ficam impossíveis de diagnosticar.
  console.error('[Firebase Auth]', code || 'sem código', err);

  if (ERROR_MESSAGES[code]) return ERROR_MESSAGES[code];
  return code ? `Erro do Firebase: ${code}` : raw || 'Não foi possível concluir a operação.';
}

// Converte o usuário do Firebase no formato usado pelo sistema.
export async function mapFirebaseUser(firebaseUser: FirebaseUser): Promise<User> {
  const tokenResult = await firebaseUser.getIdTokenResult();
  const claims = tokenResult.claims as { role?: string; name?: string };
  const email = firebaseUser.email ?? '';

  return {
    id: firebaseUser.uid,
    name: formatPersonName(
      firebaseUser.displayName || claims.name || email.split('@')[0].replace(/[._]/g, ' ')
    ),
    email,
    role: claims.role || 'Colaborador',
    avatarUrl: firebaseUser.photoURL ?? undefined
  };
}

export async function loginWithEmail(email: string, password: string): Promise<AuthResult> {
  try {
    const credential = await signInWithEmailAndPassword(auth, email.trim(), password);
    const [user, token] = await Promise.all([
      mapFirebaseUser(credential.user),
      credential.user.getIdToken()
    ]);
    return { success: true, user, token };
  } catch (err) {
    return { success: false, message: describeError(err) };
  }
}

export async function registerWithEmail(
  name: string,
  email: string,
  password: string
): Promise<AuthResult> {
  try {
    const credential = await createUserWithEmailAndPassword(auth, email.trim(), password);

    if (name.trim()) {
      await updateProfile(credential.user, { displayName: formatPersonName(name) });
    }

    const [user, token] = await Promise.all([
      mapFirebaseUser(credential.user),
      credential.user.getIdToken()
    ]);
    return { success: true, user, token };
  } catch (err) {
    return { success: false, message: describeError(err) };
  }
}

export async function logout(): Promise<void> {
  await signOut(auth);
}

export async function resetPassword(email: string): Promise<AuthResult> {
  try {
    await sendPasswordResetEmail(auth, email.trim());
    return { success: true, message: 'Enviamos um e-mail para redefinir sua senha.' };
  } catch (err) {
    return { success: false, message: describeError(err) };
  }
}

// Observa a sessão: dispara com o usuário logado ou null ao deslogar/expirar.
export function observeSession(
  callback: (session: { user: User; token: string } | null) => void
): () => void {
  return onAuthStateChanged(auth, async (firebaseUser) => {
    if (!firebaseUser) {
      callback(null);
      return;
    }
    const [user, token] = await Promise.all([
      mapFirebaseUser(firebaseUser),
      firebaseUser.getIdToken()
    ]);
    callback({ user, token });
  });
}

// Token atual (renovado automaticamente pelo SDK) para autenticar chamadas à API.
export async function getIdToken(): Promise<string | null> {
  const current = auth.currentUser;
  if (!current) return null;
  return current.getIdToken();
}
