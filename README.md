# Formação de Talentos — Zello

Plataforma de capacitação e certificação: a pessoa faz uma avaliação de nível,
estuda por trilhas divididas em módulos, revisa por flash cards, é aprovada em
simulados e se certifica para entrar no quadro de talentos.

## Como funciona

O avanço é por fases, e cada uma libera a seguinte:

1. **Início** — apresentação do programa. Ler e confirmar "Estou Ciente" libera o resto.
2. **Avaliação** — teste de nível na área escolhida (Desenvolvimento e/ou Análise).
3. **360** — formação base, para quem ainda não tem a noção inicial. Ser aprovado
   no simulado dela também libera as trilhas.
4. **Trilhas** — 10 caminhos de especialização, cada um com módulos, conteúdos,
   flash cards e simulado final.
5. **Minha Jornada** — as trilhas em andamento, com o progresso de cada uma.
6. **Painel** — todas as pessoas do sistema, com cargo, nível, avaliações,
   simulados, trilhas e certificados.

### Níveis

| Nível | Como se conquista |
| --- | --- |
| 00 | entrou no sistema |
| 01 | iniciou uma trilha |
| 02 | concluiu 100% de uma trilha e foi aprovado no simulado |

### Perfis

`Administrador` > `Suporte` > `Líder` > `Monitor` > `Colaborador`

De Líder para cima, o perfil navega sem travas e pode atribuir cargos iguais ou
inferiores ao seu. O nível não se aplica ao Administrador.

## Estrutura

```
client/   React + TypeScript + Vite — toda a interface
server/   Express + TypeScript — lista de usuários e atribuição de perfis
firestore.rules   regras de segurança do banco
```

## Rodando localmente

Pré-requisitos: Node.js 18+ e uma conta no Firebase.

```bash
# front-end
cd client && npm install && npm run dev     # http://localhost:5173

# back-end (em outro terminal)
cd server && npm install && npm run dev     # http://localhost:3001
```

### Configuração do Firebase

O projeto usa Firebase Auth (login), Firestore (progresso e mensagens) e
Firebase Admin no backend.

1. Copie `client/.env.example` para `client/.env` e ajuste se usar outro projeto.
2. Copie `server/.env.example` para `server/.env`.
3. No Console do Firebase, em **Configurações do projeto → Contas de serviço**,
   gere uma chave privada e salve como `server/serviceAccountKey.json`.
   **Esse arquivo é secreto e não vai para o repositório.**
4. Publique o conteúdo de `firestore.rules` em **Firestore → Regras**.
5. Em **Firestore → TTL**, crie políticas no campo `expiresAt` para os grupos de
   coleção `mensagens` e `conversas` — é o que apaga as mensagens após 30 dias.

Veja [FIREBASE.md](FIREBASE.md) para o passo a passo detalhado.

## Mensagens

O sistema tem chat em tempo real: dois canais abertos a todos (**Dúvidas** e
**Bate-papo**) e conversas individuais, visíveis apenas às duas pessoas. As
mensagens expiram em 30 dias.
