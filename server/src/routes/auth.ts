import { Router, Request, Response } from 'express';
import { requireAuth } from '../middleware/auth.js';
import { adminAuth, firebaseAdminReady } from '../firebase.js';

const router = Router();

// A autenticação por e-mail/senha é feita pelo Firebase Auth no cliente.
// O backend apenas valida o ID token recebido em cada requisição.

// Sessão atual: devolve o usuário do token validado.
router.get('/me', requireAuth, (req: Request, res: Response) => {
  return res.json({ success: true, user: req.user });
});

// Hierarquia dos perfis. Deve espelhar client/src/utils/roles.ts.
const ROLE_RANK: Record<string, number> = {
  Administrador: 4,
  Suporte: 3,
  'Líder': 2,
  Monitor: 1,
  Colaborador: 0
};
const ROLES = Object.keys(ROLE_RANK);
const ADMIN_EMAIL = 'adm.zello@zello.tec.br';
const MIN_RANK_TO_ASSIGN = ROLE_RANK['Líder'];

function rankOf(role?: string): number {
  return ROLE_RANK[role ?? ''] ?? 0;
}

// Define o perfil de um usuário via custom claim do Firebase.
// Disponível de Líder para cima.
router.post('/role', requireAuth, async (req: Request, res: Response) => {
  const solicitante = req.user;
  const administrador = solicitante?.email.toLowerCase() === ADMIN_EMAIL;
  const rankSolicitante = administrador ? ROLE_RANK.Administrador : rankOf(solicitante?.role);

  if (rankSolicitante < MIN_RANK_TO_ASSIGN) {
    return res.status(403).json({ success: false, message: 'Permissão negada.' });
  }

  const { uid, role } = req.body as { uid?: string; role?: string };
  if (!uid || !role) {
    return res.status(400).json({ success: false, message: 'uid e role são obrigatórios.' });
  }

  if (!ROLES.includes(role)) {
    return res.status(400).json({
      success: false,
      message: `Perfil inválido. Use um destes: ${ROLES.join(', ')}.`
    });
  }

  try {
    const alvo = await adminAuth!.getUser(uid);
    const alvoAdmin = (alvo.email ?? '').toLowerCase() === ADMIN_EMAIL;

    // A conta administrativa do sistema é sempre Administrador.
    if (alvoAdmin) {
      return res.status(403).json({
        success: false,
        message: 'O perfil da conta administrativa não pode ser alterado.'
      });
    }

    const rankAlvo = alvoAdmin
      ? ROLE_RANK.Administrador
      : rankOf(alvo.customClaims?.role as string | undefined);

    // Regra da hierarquia: só se mexe em quem está no mesmo perfil ou abaixo,
    // e só se aplica perfil igual ou inferior ao próprio.
    if (rankAlvo > rankSolicitante) {
      return res.status(403).json({
        success: false,
        message: 'Você não pode alterar o perfil de alguém acima do seu.'
      });
    }

    if (rankOf(role) > rankSolicitante) {
      return res.status(403).json({
        success: false,
        message: 'Você só pode aplicar perfis iguais ou inferiores ao seu.'
      });
    }

    await adminAuth!.setCustomUserClaims(uid, { role });
    return res.json({ success: true, message: `Perfil "${role}" aplicado.` });
  } catch (err) {
    return res.status(500).json({ success: false, message: (err as Error).message });
  }
});

// Status da integração com o Firebase (útil para diagnóstico).
router.get('/status', (_req: Request, res: Response) => {
  return res.json({ success: true, firebaseAdminReady });
});

export default router;
