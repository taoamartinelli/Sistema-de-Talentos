import { User, Collaborator, RHMetrics } from '../types';
import { getIdToken } from './auth';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:3001/api';

// Envia o ID token do Firebase em todas as chamadas à API.
async function authFetch(path: string, init: RequestInit = {}): Promise<Response> {
  const token = await getIdToken();
  const headers = new Headers(init.headers);
  headers.set('Content-Type', 'application/json');
  if (token) headers.set('Authorization', `Bearer ${token}`);
  const res = await fetch(`${API_BASE_URL}${path}`, { ...init, headers });
  if (!res.ok) throw new Error(`API ${res.status}: ${res.statusText}`);
  return res;
}

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

/** Aplica um perfil a um usuário. Só perfis de Líder para cima podem chamar. */
export async function setUserRole(
  uid: string,
  role: string
): Promise<{ success: boolean; message: string }> {
  const token = await getIdToken();
  const headers = new Headers({ 'Content-Type': 'application/json' });
  if (token) headers.set('Authorization', `Bearer ${token}`);

  try {
    const res = await fetch(`${API_BASE_URL}/auth/role`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ uid, role })
    });
    const corpo = await res.json().catch(() => ({}));

    return {
      success: res.ok && corpo.success !== false,
      message: corpo.message ?? (res.ok ? 'Perfil atualizado.' : `Falha ${res.status}.`)
    };
  } catch {
    return { success: false, message: 'O servidor não respondeu.' };
  }
}

/** Lista todos os usuários do sistema. Exige backend com credencial do Firebase Admin. */
export async function fetchUsers(): Promise<{ users: SystemUser[]; error?: string }> {
  const token = await getIdToken();
  const headers = new Headers({ 'Content-Type': 'application/json' });
  if (token) headers.set('Authorization', `Bearer ${token}`);

  let res: Response;
  try {
    res = await fetch(`${API_BASE_URL}/users`, { headers });
  } catch {
    return {
      users: [],
      error: `O servidor não respondeu em ${API_BASE_URL}. Rode "npm run dev" na pasta server e tente de novo.`
    };
  }

  // O backend explica o motivo — repassamos a mensagem em vez de um erro genérico.
  if (!res.ok) {
    let mensagem = `O servidor respondeu ${res.status}.`;
    try {
      const corpo = await res.json();
      if (corpo?.message) mensagem = corpo.message;
    } catch {
      /* resposta sem corpo JSON */
    }

    if (res.status === 503) {
      mensagem +=
        ' Baixe a chave de conta de serviço no Console do Firebase (Configurações do projeto → Contas de serviço) e salve como server/serviceAccountKey.json.';
    }
    return { users: [], error: mensagem };
  }

  const data = await res.json();
  return { users: data.data ?? [] };
}

// Confirma no backend que o token é válido e devolve o perfil do usuário.
export async function fetchSessionUser(): Promise<User | null> {
  try {
    const res = await authFetch('/auth/me');
    const data = await res.json();
    return data.user ?? null;
  } catch (err) {
    return null;
  }
}

export async function fetchCollaborators(department?: string, status?: string, search?: string): Promise<Collaborator[]> {
  try {
    const params = new URLSearchParams();
    if (department && department !== 'Todos') params.append('department', department);
    if (status && status !== 'Todos') params.append('status', status);
    if (search) params.append('search', search);

    const res = await authFetch(`/collaborators?${params.toString()}`);
    const data = await res.json();
    return data.data || [];
  } catch (err) {
    return [
      {
        id: 'col-1',
        name: 'Ana Beatris Silva',
        email: 'ana.silva@zello.tec.br',
        role: 'Tech Lead Frontend',
        department: 'Tecnologia',
        status: 'Ativo',
        salary: 14500,
        startDate: '2023-03-15',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
      },
      {
        id: 'col-2',
        name: 'Lucas Martinelli',
        email: 'lucas.martinelli@zello.tec.br',
        role: 'Engenheiro de Software Senior',
        department: 'Tecnologia',
        status: 'Ativo',
        salary: 16200,
        startDate: '2022-08-01',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
      },
      {
        id: 'col-3',
        name: 'Mariana Costa',
        email: 'mariana.costa@zello.tec.br',
        role: 'Coordenadora de DPO & RH',
        department: 'Recursos Humanos',
        status: 'Ativo',
        salary: 11800,
        startDate: '2024-01-10',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80'
      }
    ];
  }
}

export async function fetchRHMetrics(): Promise<RHMetrics> {
  try {
    const res = await authFetch('/collaborators/metrics/overview');
    const data = await res.json();
    return data.data;
  } catch (err) {
    return {
      totalCollaborators: 248,
      collaboratorsGrowth: 12.4,
      turnoverRate: 1.8,
      turnoverChange: -0.4,
      monthlyPayroll: 845000,
      payrollChange: 3.2,
      eNPS: 88,
      eNPSChange: 5.0
    };
  }
}

export async function createCollaborator(collab: Partial<Collaborator>): Promise<Collaborator | null> {
  try {
    const res = await authFetch('/collaborators', {
      method: 'POST',
      body: JSON.stringify(collab)
    });
    const data = await res.json();
    return data.data;
  } catch (err) {
    return null;
  }
}
