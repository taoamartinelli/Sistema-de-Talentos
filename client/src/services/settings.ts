import { sendEmailVerification } from 'firebase/auth';
import { auth } from './firebase';
import { AuthResult, describeError } from './auth';

export interface AccountInfo {
  email: string;
  emailVerified: boolean;
  provider: string;
  createdAt: string | null;
  lastLoginAt: string | null;
  uid: string;
}

const PROVIDER_LABELS: Record<string, string> = {
  password: 'E-mail e senha',
  'google.com': 'Google',
  'microsoft.com': 'Microsoft'
};

function formatDate(value?: string | null): string | null {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

// Dados da conta vindos do próprio Firebase Auth.
export function getAccountInfo(): AccountInfo | null {
  const current = auth.currentUser;
  if (!current) return null;

  const providerId = current.providerData[0]?.providerId ?? 'password';

  return {
    email: current.email ?? '',
    emailVerified: current.emailVerified,
    provider: PROVIDER_LABELS[providerId] ?? providerId,
    createdAt: formatDate(current.metadata.creationTime),
    lastLoginAt: formatDate(current.metadata.lastSignInTime),
    uid: current.uid
  };
}

// Reenvia o e-mail de verificação para o endereço cadastrado.
export async function sendVerificationEmail(): Promise<AuthResult> {
  try {
    const current = auth.currentUser;
    if (!current) return { success: false, message: 'Sessão não encontrada.' };
    if (current.emailVerified) return { success: false, message: 'Este e-mail já está verificado.' };

    await sendEmailVerification(current);
    return { success: true, message: `Link de verificação enviado para ${current.email}.` };
  } catch (err) {
    return { success: false, message: describeError(err) };
  }
}

// Recarrega o usuário para refletir uma verificação feita em outra aba.
export async function reloadAccount(): Promise<AuthResult> {
  try {
    const current = auth.currentUser;
    if (!current) return { success: false, message: 'Sessão não encontrada.' };

    await current.reload();
    return {
      success: true,
      message: current.emailVerified ? 'E-mail verificado.' : 'Ainda não consta como verificado.'
    };
  } catch (err) {
    return { success: false, message: describeError(err) };
  }
}
