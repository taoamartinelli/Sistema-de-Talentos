export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
}

export interface Collaborator {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  status: 'Ativo' | 'Férias' | 'Onboarding' | 'Inativo';
  salary: number;
  startDate: string;
  avatar: string;
}

export interface RHMetrics {
  totalCollaborators: number;
  collaboratorsGrowth: number;
  turnoverRate: number;
  turnoverChange: number;
  monthlyPayroll: number;
  payrollChange: number;
  eNPS: number;
  eNPSChange: number;
}
