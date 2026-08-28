import fs from 'node:fs';
import path from 'node:path';
import { applicationDefault, cert, getApps, initializeApp, type App } from 'firebase-admin/app';
import { getAuth, type Auth } from 'firebase-admin/auth';

const PROJECT_ID = process.env.FIREBASE_PROJECT_ID || 'sistema-de-talentos';

// Caminho padrão da chave de serviço, se nenhuma variável de ambiente for definida.
const DEFAULT_KEY_PATH = path.resolve(process.cwd(), 'serviceAccountKey.json');

function resolveCredential() {
  // 1) Conteúdo JSON da chave direto na variável de ambiente.
  const inlineJson = process.env.FIREBASE_SERVICE_ACCOUNT;
  if (inlineJson) {
    return cert(JSON.parse(inlineJson));
  }

  // 2) Caminho para o arquivo da chave de serviço.
  const keyPath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH || DEFAULT_KEY_PATH;
  if (fs.existsSync(keyPath)) {
    return cert(JSON.parse(fs.readFileSync(keyPath, 'utf-8')));
  }

  // 3) Credencial padrão do ambiente (GOOGLE_APPLICATION_CREDENTIALS / Cloud Run / GCE).
  if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    return applicationDefault();
  }

  return null;
}

let app: App | null = null;
let initError: string | null = null;

try {
  const credential = resolveCredential();
  if (credential) {
    app = getApps()[0] ?? initializeApp({ credential, projectId: PROJECT_ID });
  } else {
    initError =
      'Credencial do Firebase Admin não encontrada. Defina FIREBASE_SERVICE_ACCOUNT, ' +
      'FIREBASE_SERVICE_ACCOUNT_PATH ou GOOGLE_APPLICATION_CREDENTIALS.';
  }
} catch (err) {
  initError = `Falha ao inicializar o Firebase Admin: ${(err as Error).message}`;
}

export const firebaseAdminReady = app !== null;
export const firebaseAdminError = initError;
export const adminAuth: Auth | null = app ? getAuth(app) : null;

export function logFirebaseStatus(): void {
  if (firebaseAdminReady) {
    console.log(`🔐 Firebase Admin conectado ao projeto "${PROJECT_ID}"`);
  } else {
    console.warn(`⚠️  ${firebaseAdminError}`);
    console.warn('⚠️  As rotas protegidas responderão 503 até a credencial ser configurada.');
  }
}
