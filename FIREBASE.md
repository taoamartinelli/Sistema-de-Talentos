# Autenticação com Firebase

O login do sistema usa **Firebase Authentication (e-mail/senha)**. O backend não guarda
mais senhas: ele apenas valida o ID token que o cliente envia em cada requisição.

## Fluxo

1. `LoginScreen` chama `signInWithEmailAndPassword` (client/src/services/auth.ts).
2. O Firebase devolve o usuário e um ID token (JWT).
3. `App.tsx` observa a sessão com `onAuthStateChanged` — o login sobrevive ao refresh.
4. Toda chamada à API vai com `Authorization: Bearer <idToken>` (client/src/services/api.ts).
5. O middleware `requireAuth` (server/src/middleware/auth.ts) valida o token com o
   Firebase Admin SDK e preenche `req.user`.

## Configuração necessária no Console do Firebase

1. **Authentication > Sign-in method**: habilite **E-mail/senha**.
2. **Authentication > Users**: crie os usuários do RH (e-mail + senha).
3. **Authentication > Settings > Authorized domains**: adicione `localhost` e o domínio de produção.

## Configuração do cliente

As chaves públicas do app web já vêm com valores padrão em `client/src/services/firebase.ts`
e podem ser sobrescritas por `client/.env` (veja `client/.env.example`).

## Configuração do servidor

O backend precisa de uma **chave de conta de serviço**:

1. Console do Firebase > Configurações do projeto > **Contas de serviço** > *Gerar nova chave privada*.
2. Salve o arquivo como `server/serviceAccountKey.json` (já está no `.gitignore`), ou aponte
   `FIREBASE_SERVICE_ACCOUNT_PATH` / `FIREBASE_SERVICE_ACCOUNT` / `GOOGLE_APPLICATION_CREDENTIALS`
   para ele em `server/.env` (veja `server/.env.example`).

Sem essa chave o servidor sobe normalmente, avisa no console e responde **503** nas rotas
protegidas — o front-end continua exibindo os dados de demonstração.

Verifique o status em: `GET http://localhost:3001/api/auth/status`

## Papéis (roles)

O papel do usuário vem do *custom claim* `role` do Firebase. Para definir:

```
POST /api/auth/role   { "uid": "<uid>", "role": "Administrador RH" }
```

(a rota exige um token de alguém que já tenha `role = "Administrador RH"`; o primeiro
administrador pode ser criado por script com `adminAuth.setCustomUserClaims`).
Sem claim, o usuário entra como `Colaborador`.
