/** Conta administrativa do sistema, reconhecida mesmo sem custom claim. */
export const ADMIN_EMAIL = 'adm.zello@zello.tec.br';

/** Perfis de acesso, do maior para o menor na hierarquia. */
export const ROLES = ['Administrador', 'Suporte', 'Líder', 'Monitor', 'Colaborador'] as const;

export type Role = (typeof ROLES)[number];

export const DEFAULT_ROLE: Role = 'Colaborador';

/**
 * Posição na hierarquia: Administrador > Suporte > Líder > Monitor > Colaborador.
 * Quanto maior o número, maior o perfil.
 *
 * Atenção: isto NÃO é o "Nível" do programa (00, 01, 02), que fica em
 * services/level.ts e mede o avanço da pessoa nas trilhas. Estes números
 * servem apenas para ordenar e comparar perfis — nunca aparecem na tela.
 */
export const ROLE_RANK: Record<Role, number> = {
  Administrador: 4,
  Suporte: 3,
  'Líder': 2,
  Monitor: 1,
  Colaborador: 0
};

export function rankOf(role: Role): number {
  return ROLE_RANK[role];
}

/** True quando o perfil é igual ou superior ao mínimo exigido. */
export function atLeast(role: Role, minimo: Role): boolean {
  return rankOf(role) >= rankOf(minimo);
}

/**
 * A partir de Líder, o perfil navega sem travas: nenhuma página é bloqueada
 * e nenhum módulo, flash card ou simulado depende de etapa anterior.
 */
const FREE_ACCESS_FROM: Role = 'Líder';

/** O nível é a escada de progressão do programa e não se aplica ao administrador. */
const WITHOUT_LEVEL: Role[] = ['Administrador'];

/** Cor de cada perfil: o texto e o fundo da etiqueta. */
export const ROLE_STYLE: Record<Role, { color: string; background: string }> = {
  Administrador: { color: '#f25c3b', background: 'rgba(242, 92, 59, 0.16)' },
  Suporte: { color: '#c084fc', background: 'rgba(192, 132, 252, 0.14)' },
  'Líder': { color: '#60a5fa', background: 'rgba(96, 165, 250, 0.14)' },
  Monitor: { color: '#34d399', background: 'rgba(52, 211, 153, 0.14)' },
  Colaborador: { color: '#97a0b0', background: '#1e2330' }
};

const isRole = (value: unknown): value is Role => ROLES.includes(value as Role);

/** Perfil da pessoa: vem da custom claim do Firebase; o e-mail admin é reconhecido sempre. */
export function roleOf(user: { email: string; role?: string }): Role {
  if (user.email.toLowerCase() === ADMIN_EMAIL) return 'Administrador';
  return isRole(user.role) ? user.role : DEFAULT_ROLE;
}

/** True quando o perfil ignora as regras de travamento de páginas e conteúdos. */
export function hasFreeAccess(role: Role): boolean {
  return atLeast(role, FREE_ACCESS_FROM);
}

/** True quando o perfil participa da progressão de níveis (00, 01, 02). */
export function hasLevels(role: Role): boolean {
  return !WITHOUT_LEVEL.includes(role);
}

/** Atalho para o perfil administrativo. */
export function isAdmin(user: { email: string; role?: string }): boolean {
  return roleOf(user) === 'Administrador';
}
