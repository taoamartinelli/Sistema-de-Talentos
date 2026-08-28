import { NextFunction, Request, Response } from 'express';
import { adminAuth, firebaseAdminError, firebaseAdminReady } from '../firebase.js';
import { User } from '../types.js';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      user?: User;
      uid?: string;
    }
  }
}

// Valida o ID token do Firebase enviado no header Authorization: Bearer <token>.
export async function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (!firebaseAdminReady || !adminAuth) {
    return res.status(503).json({
      success: false,
      message: firebaseAdminError ?? 'Autenticação indisponível.'
    });
  }

  const header = req.headers.authorization ?? '';
  const token = header.startsWith('Bearer ') ? header.slice(7).trim() : '';

  if (!token) {
    return res.status(401).json({ success: false, message: 'Token de autenticação ausente.' });
  }

  try {
    const decoded = await adminAuth.verifyIdToken(token);
    const email = decoded.email ?? '';

    req.uid = decoded.uid;
    req.user = {
      id: decoded.uid,
      name: decoded.name || email.split('@')[0].replace(/[._]/g, ' '),
      email,
      role: (decoded.role as string) || 'Colaborador',
      avatarUrl: decoded.picture
    };
    return next();
  } catch (err) {
    const code = (err as { code?: string }).code ?? '';
    const expired = code === 'auth/id-token-expired';
    return res.status(401).json({
      success: false,
      message: expired ? 'Sessão expirada. Faça login novamente.' : 'Token inválido.'
    });
  }
}
