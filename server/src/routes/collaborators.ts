import { Router, Request, Response } from 'express';
import { Collaborator, RHMetrics } from '../types.js';

const router = Router();

// Mock Initial Collaborators Data
let collaborators: Collaborator[] = [
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
  },
  {
    id: 'col-4',
    name: 'Rodrigo Vasconcelos',
    email: 'rodrigo.v@zello.tec.br',
    role: 'Product Manager',
    department: 'Produto',
    status: 'Férias',
    salary: 15000,
    startDate: '2022-11-20',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'col-5',
    name: 'Camila Fernandes',
    email: 'camila.f@zello.tec.br',
    role: 'Analista de People Analytics',
    department: 'Recursos Humanos',
    status: 'Onboarding',
    salary: 8500,
    startDate: '2026-08-01',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'col-6',
    name: 'Gabriel Mendonça',
    email: 'gabriel.m@zello.tec.br',
    role: 'Executive Account Sales',
    department: 'Vendas',
    status: 'Ativo',
    salary: 12000,
    startDate: '2023-06-12',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80'
  }
];

// GET /api/collaborators
router.get('/', (req: Request, res: Response) => {
  const { department, search, status } = req.query;
  let filtered = [...collaborators];

  if (department && typeof department === 'string' && department !== 'Todos') {
    filtered = filtered.filter(c => c.department.toLowerCase() === department.toLowerCase());
  }

  if (status && typeof status === 'string' && status !== 'Todos') {
    filtered = filtered.filter(c => c.status.toLowerCase() === status.toLowerCase());
  }

  if (search && typeof search === 'string') {
    const q = search.toLowerCase();
    filtered = filtered.filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.email.toLowerCase().includes(q) ||
      c.role.toLowerCase().includes(q)
    );
  }

  res.json({ success: true, count: filtered.length, data: filtered });
});

// POST /api/collaborators (Create)
router.post('/', (req: Request, res: Response) => {
  const { name, email, role, department, salary, status } = req.body;

  if (!name || !email || !role || !department) {
    return res.status(400).json({ success: false, message: 'Campos obrigatórios ausentes.' });
  }

  const newCollab: Collaborator = {
    id: `col-${Date.now()}`,
    name,
    email,
    role,
    department,
    status: status || 'Ativo',
    salary: Number(salary) || 5000,
    startDate: new Date().toISOString().split('T')[0],
    avatar: `https://images.unsplash.com/photo-${1535713875002 + Math.floor(Math.random() * 1000)}?auto=format&fit=crop&w=150&q=80`
  };

  collaborators.unshift(newCollab);

  res.status(201).json({ success: true, data: newCollab });
});

// DELETE /api/collaborators/:id
router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const initialLength = collaborators.length;
  collaborators = collaborators.filter(c => c.id !== id);

  if (collaborators.length === initialLength) {
    return res.status(404).json({ success: false, message: 'Colaborador não encontrado.' });
  }

  res.json({ success: true, message: 'Colaborador removido com sucesso.' });
});

// GET /api/metrics
router.get('/metrics/overview', (_req: Request, res: Response) => {
  const totalSalaries = collaborators.reduce((acc, c) => acc + c.salary, 0);

  const metrics: RHMetrics = {
    totalCollaborators: collaborators.length + 240, // Demo enlarged figure
    collaboratorsGrowth: 12.4,
    turnoverRate: 1.8,
    turnoverChange: -0.4,
    monthlyPayroll: totalSalaries * 40 + 560000, // Projected total
    payrollChange: 3.2,
    eNPS: 88,
    eNPSChange: 5.0
  };

  res.json({ success: true, data: metrics });
});

export default router;
