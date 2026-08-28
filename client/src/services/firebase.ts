import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported as isAnalyticsSupported } from 'firebase/analytics';
import { browserLocalPersistence, getAuth, setPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Configuração do projeto Firebase "sistema-de-talentos".
// Os valores podem ser sobrescritos por variáveis de ambiente (client/.env).
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ?? 'AIzaSyBrTUrBpmLSjwlkIV1h6KQPMjUkRo0Pe7g',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ?? 'sistema-de-talentos.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID ?? 'sistema-de-talentos',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ?? 'sistema-de-talentos.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ?? '915309718389',
  appId: import.meta.env.VITE_FIREBASE_APP_ID ?? '1:915309718389:web:5a9c6e10535b0791f8813c',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID ?? 'G-2F145HVFL9'
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

// Base do progresso compartilhado entre dispositivos e visível no Painel.
// O banco deste projeto chama-se "default" (e não "(default)"), por isso o id explícito.
export const db = getFirestore(
  firebaseApp,
  import.meta.env.VITE_FIRESTORE_DATABASE_ID ?? 'default'
);

// Mantém a sessão entre recarregamentos da página.
setPersistence(auth, browserLocalPersistence).catch((err) => {
  console.warn('Não foi possível ativar a persistência local do Firebase Auth:', err);
});

// Analytics só funciona em ambientes com suporte (navegador, https/localhost).
isAnalyticsSupported()
  .then((supported) => {
    if (supported) getAnalytics(firebaseApp);
  })
  .catch(() => {
    /* analytics é opcional — ignora falhas silenciosamente */
  });
