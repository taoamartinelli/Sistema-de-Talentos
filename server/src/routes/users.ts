import { Router, Request, Response } from 'express';
import { adminAuth } from '../firebase.js';

const router = Router();

export interface SystemUser {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  createdAt: string | null;
  lastSignInAt: string | null;
  disabled: boolean;
  /** Papel atribuído por custom claim, quando houver. */
  role?: string;
}

function formatName(email: string, displayName?: string): string {
  const base = displayName || email.split('@')[0].replace(/[._]/g, ' ');
  return base
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase()
    .split(' ')
    .map((word) => (word ? word.charAt(0).toUpperCase() + word.slice(1) : word))
    .join(' ');
}

/** Lista todos os usuários do sistema (a partir do Firebase Auth). */
router.get('/', async (_req: Request, res: Response) => {
  try {
    const usuarios: SystemUser[] = [];
    let pageToken: string | undefined;

    // O Firebase devolve no máximo 1000 por página.
    do {
      const page = await adminAuth!.listUsers(1000, pageToken);
      page.users.forEach((user) => {
        const email = user.email ?? '';

        // Conta sem e-mail não é pessoa do programa: não entra na listagem.
        if (!email) return;

        usuarios.push({
          id: user.uid,
          name: formatName(email, user.displayName ?? undefined),
          email,
          avatarUrl: user.photoURL ?? undefined,
          createdAt: user.metadata.creationTime ?? null,
          lastSignInAt: user.metadata.lastSignInTime ?? null,
          disabled: user.disabled,
          role: (user.customClaims?.role as string | undefined) ?? undefined
        });
      });
      pageToken = page.pageToken;
    } while (pageToken);

    usuarios.sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
    return res.json({ success: true, data: usuarios });
  } catch (err) {
    return res.status(500).json({ success: false, message: (err as Error).message });
  }
});

export default router;
