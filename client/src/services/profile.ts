import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
  updateProfile,
  verifyBeforeUpdateEmail
} from 'firebase/auth';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { auth, firebaseApp } from './firebase';
import { AuthResult, describeError, mapFirebaseUser } from './auth';
import { formatPersonName } from '../utils/formatName';

const MAX_PHOTO_BYTES = 5 * 1024 * 1024; // 5 MB

function requireCurrentUser() {
  const current = auth.currentUser;
  if (!current) throw new Error('SEM_SESSAO');
  return current;
}

// Reautentica com a senha atual — exigido pelo Firebase antes de trocar e-mail ou senha.
async function reauthenticate(currentPassword: string) {
  const current = requireCurrentUser();
  const credential = EmailAuthProvider.credential(current.email ?? '', currentPassword);
  await reauthenticateWithCredential(current, credential);
  return current;
}

// Devolve o usuário atual já atualizado (após reload) no formato do sistema.
export async function refreshCurrentUser(): Promise<AuthResult> {
  const current = auth.currentUser;
  if (!current) return { success: false, message: 'Sessão não encontrada.' };
  await current.reload();
  return { success: true, user: await mapFirebaseUser(auth.currentUser!) };
}

export async function updateUserName(name: string): Promise<AuthResult> {
  try {
    const current = requireCurrentUser();
    if (!name.trim()) return { success: false, message: 'Informe seu nome.' };

    await updateProfile(current, { displayName: formatPersonName(name) });
    return {
      success: true,
      message: 'Nome atualizado.',
      user: await mapFirebaseUser(current)
    };
  } catch (err) {
    return { success: false, message: describeError(err) };
  }
}

export async function updateUserPhoto(file: File): Promise<AuthResult> {
  try {
    const current = requireCurrentUser();

    if (!file.type.startsWith('image/')) {
      return { success: false, message: 'Selecione um arquivo de imagem.' };
    }
    if (file.size > MAX_PHOTO_BYTES) {
      return { success: false, message: 'A imagem precisa ter no máximo 5 MB.' };
    }

    const storage = getStorage(firebaseApp);
    const extension = file.name.split('.').pop() || 'png';
    const photoRef = ref(storage, `avatars/${current.uid}.${extension}`);

    await uploadBytes(photoRef, file, { contentType: file.type });
    const photoURL = await getDownloadURL(photoRef);
    await updateProfile(current, { photoURL });

    return {
      success: true,
      message: 'Foto atualizada.',
      user: await mapFirebaseUser(current)
    };
  } catch (err) {
    const code = (err as { code?: string }).code ?? '';
    if (code.startsWith('storage/')) {
      return {
        success: false,
        message: 'Não foi possível enviar a imagem. Verifique se o Firebase Storage está ativado.'
      };
    }
    return { success: false, message: describeError(err) };
  }
}

export async function updateUserEmail(currentPassword: string, newEmail: string): Promise<AuthResult> {
  try {
    if (!newEmail.trim()) return { success: false, message: 'Informe o novo e-mail.' };

    const current = await reauthenticate(currentPassword);
    // O Firebase envia um link para o novo endereço; a troca só vale após a confirmação.
    await verifyBeforeUpdateEmail(current, newEmail.trim());

    return {
      success: true,
      message: `Enviamos um link de confirmação para ${newEmail.trim()}. O e-mail muda depois que você confirmar.`
    };
  } catch (err) {
    return { success: false, message: describeError(err) };
  }
}

export async function updateUserPassword(currentPassword: string, newPassword: string): Promise<AuthResult> {
  try {
    if (newPassword.length < 6) {
      return { success: false, message: 'A nova senha precisa ter pelo menos 6 caracteres.' };
    }

    const current = await reauthenticate(currentPassword);
    await updatePassword(current, newPassword);

    return { success: true, message: 'Senha alterada.' };
  } catch (err) {
    return { success: false, message: describeError(err) };
  }
}
