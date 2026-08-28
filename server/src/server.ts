import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth.js';
import collaboratorsRouter from './routes/collaborators.js';
import usersRouter from './routes/users.js';
import { requireAuth } from './middleware/auth.js';
import { logFirebaseStatus } from './firebase.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/collaborators', requireAuth, collaboratorsRouter);
app.use('/api/users', requireAuth, usersRouter);

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'ZELLO RH API', timestamp: new Date().toISOString() });
});

// Start server
const server = app.listen(PORT, () => {
  console.log(`🚀 ZELLO Backend API rodando em http://localhost:${PORT}`);
  logFirebaseStatus();
});

// O tsx watch envia SIGTERM antes de subir a nova versão. Sem fechar o
// servidor aqui, a porta continua ocupada e o reinício falha com EADDRINUSE.
function encerrar(sinal: string) {
  console.log(`${sinal} recebido — encerrando o servidor.`);
  server.close(() => process.exit(0));
  // Conexões abertas não podem segurar o desligamento indefinidamente.
  setTimeout(() => process.exit(0), 2000).unref();
}

process.on('SIGTERM', () => encerrar('SIGTERM'));
process.on('SIGINT', () => encerrar('SIGINT'));

