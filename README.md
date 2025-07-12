# 🤖 Let Me Ask AI - API

> Uma API moderna e inteligente para processamento de áudio com IA, permitindo transcrição, análise e geração de perguntas contextuais usando Google Gemini AI.

<div align="center">

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Fastify](https://img.shields.io/badge/Fastify-000000?style=for-the-badge&logo=fastify&logoColor=white)](https://www.fastify.io/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Drizzle](https://img.shields.io/badge/Drizzle-C5F74F?style=for-the-badge&logo=drizzle&logoColor=black)](https://orm.drizzle.team/)
[![Google AI](https://img.shields.io/badge/Google%20AI-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
![License](https://img.shields.io/badge/license-ISC-yellow.svg)
![Node Version](https://img.shields.io/badge/node-%3E%3D22.6.0-brightgreen)

</div>

## 🎯 Sobre o Projeto

O **Let Me Ask AI** é uma API avançada que combina o poder da inteligência artificial com processamento de áudio em tempo real. Desenvolvida para criar salas interativas onde usuários podem fazer upload de áudios, obter transcrições automáticas e gerar perguntas contextuais inteligentes usando a tecnologia Google Gemini AI.

## ✨ Funcionalidades Principais

### 🎙️ **Processamento de Áudio Inteligente**

- Upload e processamento de arquivos de áudio
- Transcrição automática com Google Gemini AI
- Geração de embeddings para busca semântica
- Suporte a múltiplos formatos de áudio

### 🏠 **Sistema de Salas**

- Criação e gerenciamento de salas temáticas
- Organização de conteúdo por contexto
- Listagem e busca de salas disponíveis

### ❓ **Geração Inteligente de Perguntas**

- Criação automática de perguntas baseadas no conteúdo
- Análise contextual usando IA avançada
- Sistema de perguntas e respostas interativo

### 🛠️ **Arquitetura Moderna**

- 🔥 **Fastify** - Framework web ultra-rápido e eficiente
- 🛡️ **TypeScript** - Tipagem estática para maior segurança
- ✅ **Zod** - Validação robusta de esquemas
- 🗄️ **Drizzle ORM** - ORM moderno para PostgreSQL
- 🧠 **Google Gemini AI** - IA avançada para processamento
- 🌐 **CORS** - Configurado para desenvolvimento e produção
- ⚡ **Hot Reload** - Desenvolvimento ágil com watch mode
- 📦 **ESM** - Módulos ES nativos do Node.js 22+

## 🚀 Início Rápido

### 📋 Pré-requisitos

- **Node.js 22+** (com suporte nativo ao TypeScript)
- **PostgreSQL** com extensão pgvector
- **Docker & Docker Compose** (opcional)
- **Conta Google AI** para Gemini API
- **npm** ou **yarn**

### ⚙️ Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/let-me-ask-ai-api.git
cd let-me-ask-ai-api

# 2. Instale as dependências
npm install

# 3. Configure o banco de dados (com Docker)
docker-compose up -d

# 4. Configure as variáveis de ambiente
cp .env.example .env
```

### 🔐 Configuração de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
# Configuração do Servidor
PORT=3333

# Configuração do Banco de Dados
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents

# Google Gemini AI
GEMINI_API_KEY=sua_chave_do_gemini_aqui
```

> 💡 **Dica**: Obtenha sua chave da API do Gemini em [Google AI Studio](https://makersuite.google.com/app/apikey)

### 🏗️ Setup do Banco de Dados

```bash
# Gerar as migrations
npm run db:generate

# Aplicar as migrations
npm run db:migrate

# (Opcional) Popular com dados de exemplo
npm run db:seed

# (Opcional) Abrir Drizzle Studio
npm run db:studio
```

### 🚀 Executando a Aplicação

```bash
# Desenvolvimento (com hot reload)
npm run dev

# Produção
npm start
```

O servidor estará rodando em `http://localhost:3333` 🎉

## 📖 Documentação da API

### 🏠 **Salas (Rooms)**

<details>
<summary><strong>GET /rooms</strong> - Listar todas as salas</summary>

```http
GET http://localhost:3333/rooms
```

**Resposta:**

```json
{
  "rooms": [
    {
      "id": "uuid",
      "name": "Minha Sala",
      "description": "Descrição da sala",
      "createdAt": "2025-01-01T00:00:00.000Z"
    }
  ]
}
```

</details>

<details>
<summary><strong>POST /rooms</strong> - Criar nova sala</summary>

```http
POST http://localhost:3333/rooms
Content-Type: application/json

{
  "name": "Nome da Sala",
  "description": "Descrição opcional"
}
```

**Resposta:**

```json
{
  "room": {
    "id": "uuid-gerado",
    "name": "Nome da Sala",
    "description": "Descrição opcional",
    "createdAt": "2025-01-01T00:00:00.000Z"
  }
}
```

</details>

### 🎙️ **Upload de Áudio**

<details>
<summary><strong>POST /rooms/:roomId/audio</strong> - Upload e processamento de áudio</summary>

```http
POST http://localhost:3333/rooms/{roomId}/audio
Content-Type: multipart/form-data

# Arquivo de áudio nos formats: mp3, wav, m4a, etc.
```

**Resposta:**

```json
{
  "message": "Áudio processado com sucesso",
  "audioChunk": {
    "id": "uuid",
    "roomId": "uuid",
    "transcription": "Texto transcrito do áudio...",
    "createdAt": "2025-01-01T00:00:00.000Z"
  }
}
```

</details>

### ❓ **Perguntas**

<details>
<summary><strong>GET /rooms/:roomId/questions</strong> - Obter perguntas de uma sala</summary>

```http
GET http://localhost:3333/rooms/{roomId}/questions
```

**Resposta:**

```json
{
  "questions": [
    {
      "id": "uuid",
      "roomId": "uuid",
      "text": "Qual é o tema principal discutido?",
      "answer": "Resposta gerada pela IA...",
      "createdAt": "2025-01-01T00:00:00.000Z"
    }
  ]
}
```

</details>

<details>
<summary><strong>POST /rooms/:roomId/questions</strong> - Criar nova pergunta</summary>

```http
POST http://localhost:3333/rooms/{roomId}/questions
Content-Type: application/json

{
  "text": "Sua pergunta aqui"
}
```

**Resposta:**

```json
{
  "question": {
    "id": "uuid",
    "roomId": "uuid",
    "text": "Sua pergunta aqui",
    "answer": "Resposta gerada pela IA baseada no contexto...",
    "createdAt": "2025-01-01T00:00:00.000Z"
  }
}
```

</details>

## 📁 Arquitetura do Projeto

```
let-me-ask-ai-api/
├── 📂 src/
│   ├── 📄 env.ts                    # Configuração e validação de variáveis
│   ├── 📄 server.ts                 # Configuração principal do servidor
│   ├── 📂 db/
│   │   ├── 📄 connection.ts         # Conexão com PostgreSQL
│   │   ├── 📄 seed.ts              # Seeds para popular o banco
│   │   ├── 📂 migrations/           # Histórico de migrations
│   │   └── 📂 schema/               # Esquemas do banco de dados
│   │       ├── 📄 index.ts         # Exportações centralizadas
│   │       ├── 📄 rooms.ts         # Schema das salas
│   │       ├── 📄 questions.ts     # Schema das perguntas
│   │       └── 📄 audio-chunks.ts  # Schema dos chunks de áudio
│   ├── 📂 http/
│   │   └── 📂 routes/              # Definição das rotas da API
│   │       ├── 📄 create-room.ts
│   │       ├── 📄 get-rooms.ts
│   │       ├── 📄 create-question.ts
│   │       ├── 📄 get-room-questions.ts
│   │       └── 📄 upload-audio.ts
│   └── 📂 services/
│       └── 📄 gemini.ts            # Integração com Google Gemini AI
├── 📄 package.json                 # Dependências e scripts
├── 📄 tsconfig.json               # Configuração do TypeScript
├── 📄 drizzle.config.ts           # Configuração do Drizzle ORM
├── 📄 docker-compose.yml          # Orquestração do PostgreSQL
├── 📄 biome.jsonc                 # Configuração do linter/formatter
└── 📄 README.md                   # Este arquivo
```

## 🧰 Stack Tecnológica

<div align="center">

### **Backend Core**

| Tecnologia                                                                                     | Versão    | Descrição                                |
| ---------------------------------------------------------------------------------------------- | --------- | ---------------------------------------- |
| ![Node.js](https://img.shields.io/badge/Node.js-22.6+-339933?style=flat&logo=nodedotjs)        | **22.6+** | Runtime JavaScript com TypeScript nativo |
| ![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-007ACC?style=flat&logo=typescript) | **5.8.3** | Superset tipado do JavaScript            |
| ![Fastify](https://img.shields.io/badge/Fastify-5.4.0-000000?style=flat&logo=fastify)          | **5.4.0** | Framework web de alta performance        |

### **Banco de Dados & ORM**

| Tecnologia                                                                                  | Versão            | Descrição                                       |
| ------------------------------------------------------------------------------------------- | ----------------- | ----------------------------------------------- |
| ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-17-316192?style=flat&logo=postgresql) | **17 + pgvector** | Banco de dados relacional com suporte a vetores |
| ![Drizzle](https://img.shields.io/badge/Drizzle-0.44.2-C5F74F?style=flat)                   | **0.44.2**        | ORM moderno e type-safe                         |

### **Inteligência Artificial**

| Tecnologia                                                                                   | Versão    | Descrição                        |
| -------------------------------------------------------------------------------------------- | --------- | -------------------------------- |
| ![Google AI](https://img.shields.io/badge/Google_Gemini-1.9.0-4285F4?style=flat&logo=google) | **1.9.0** | IA para transcrição e embeddings |

### **Validação & Utilitários**

| Tecnologia                                                                 | Versão      | Descrição                              |
| -------------------------------------------------------------------------- | ----------- | -------------------------------------- |
| ![Zod](https://img.shields.io/badge/Zod-3.25.75-18253c?style=flat)         | **3.25.75** | Validação de esquemas TypeScript-first |
| ![CORS](https://img.shields.io/badge/CORS-11.0.1-green?style=flat)         | **11.0.1**  | Plugin CORS para Fastify               |
| ![Multipart](https://img.shields.io/badge/Multipart-9.0.3-blue?style=flat) | **9.0.3**   | Suporte a upload de arquivos           |

### **Desenvolvimento**

| Tecnologia                                                                    | Versão     | Descrição                         |
| ----------------------------------------------------------------------------- | ---------- | --------------------------------- |
| ![Biome](https://img.shields.io/badge/Biome-2.0.6-60a5fa?style=flat)          | **2.0.6**  | Linter e formatter ultra-rápido   |
| ![Ultracite](https://img.shields.io/badge/Ultracite-5.0.32-purple?style=flat) | **5.0.32** | Regras de código e acessibilidade |

</div>

## �️ Scripts Disponíveis

### 🚀 **Desenvolvimento**

```bash
# Inicia servidor com hot reload e type stripping nativo
npm run dev

# Inicia servidor em modo produção
npm start
```

### 🗄️ **Banco de Dados**

```bash
# Gerar migrations baseadas no schema
npm run db:generate

# Aplicar migrations pendentes
npm run db:migrate

# Fazer push direto do schema (desenvolvimento)
npm run db:push

# Abrir Drizzle Studio (interface visual)
npm run db:studio

# Popular banco com dados de exemplo
npm run db:seed
```

## 🔧 Configuração Avançada

### 🌍 **Variáveis de Ambiente**

| Variável         | Tipo     | Obrigatório | Padrão | Descrição                  |
| ---------------- | -------- | ----------- | ------ | -------------------------- |
| `PORT`           | `number` | ❌          | `3333` | Porta do servidor          |
| `DATABASE_URL`   | `string` | ✅          | -      | URL de conexão PostgreSQL  |
| `GEMINI_API_KEY` | `string` | ✅          | -      | Chave da API Google Gemini |

### 🌐 **Configuração CORS**

A API está configurada com CORS habilitado para:

- ✅ **Origens**: Todas as origens em desenvolvimento
- ✅ **Métodos**: `GET`, `POST`, `PUT`, `DELETE`
- ✅ **Headers**: `Content-Type`, `Authorization`

### 🐳 **Docker Setup**

O projeto inclui configuração Docker para PostgreSQL com pgvector:

```yaml
# docker-compose.yml
services:
  let-me-ask-pg:
    image: pgvector/pgvector:pg17
    environment:
      POSTGRES_USER: docker
      POSTGRES_PASSWORD: docker
      POSTGRES_DB: agents
    ports:
      - "5432:5432"
```

## 🎯 Fluxo de Funcionamento

```mermaid
graph TD
    A[📱 Cliente] -->|Upload Áudio| B[🎙️ API Endpoint]
    B --> C[🤖 Google Gemini]
    C -->|Transcrição| D[📝 Texto]
    C -->|Embeddings| E[🔢 Vetores]
    D --> F[🗄️ PostgreSQL]
    E --> F
    F --> G[❓ Geração de Perguntas]
    G --> H[💬 Resposta Contextual]
    H --> A
```

## 🚦 Status da API

### ✅ **Funcionalidades Implementadas**

- [x] Sistema completo de salas
- [x] Upload e processamento de áudio
- [x] Transcrição automática com Gemini AI
- [x] Geração de embeddings para busca semântica
- [x] Sistema de perguntas e respostas contextuais
- [x] Validação robusta com Zod
- [x] ORM type-safe com Drizzle
- [x] Hot reload em desenvolvimento
- [x] Suporte a TypeScript nativo no Node.js 22+

### 🔄 **Próximas Funcionalidades**

- [ ] Sistema de autenticação
- [ ] Rate limiting
- [ ] Websockets para real-time
- [ ] Cache com Redis
- [ ] Testes automatizados
- [ ] Documentação OpenAPI/Swagger

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir com o projeto:

1. **Fork** o projeto
2. **Clone** seu fork: `git clone https://github.com/seu-usuario/let-me-ask-ai-api.git`
3. Crie uma **branch** para sua feature: `git checkout -b feature/AmazingFeature`
4. **Commit** suas mudanças: `git commit -m 'feat: Add some AmazingFeature'`
5. **Push** para a branch: `git push origin feature/AmazingFeature`
6. Abra um **Pull Request**

### 📋 **Padrões de Commit**

Utilizamos [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` nova funcionalidade
- `fix:` correção de bug
- `docs:` alterações na documentação
- `style:` formatação, sem mudanças de código
- `refactor:` refatoração de código
- `test:` adição ou correção de testes

## 🐛 Relatando Problemas

Encontrou um bug? Abra uma [issue](https://github.com/seu-usuario/let-me-ask-ai-api/issues) com:

- Descrição clara do problema
- Passos para reproduzir
- Comportamento esperado vs atual
- Screenshots (se aplicável)
- Informações do ambiente (Node.js, OS, etc.)

## 💝 Agradecimentos

- [Fastify Team](https://www.fastify.io/) pelo framework incrível
- [Google](https://ai.google.dev/) pela API Gemini AI
- [Drizzle Team](https://orm.drizzle.team/) pelo ORM moderno
- [Biome](https://biomejs.dev/) pelas ferramentas de desenvolvimento

## 📄 Licença

Este projeto está sob a licença **ISC**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🔗 Links Úteis

### 📚 **Documentação**

- [Fastify Documentation](https://www.fastify.io/docs/) - Framework web
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - Linguagem
- [Zod Documentation](https://zod.dev/) - Validação de esquemas
- [Drizzle ORM Docs](https://orm.drizzle.team/docs/overview) - ORM TypeScript
- [Google AI Studio](https://makersuite.google.com/) - Gemini AI
- [PostgreSQL Docs](https://www.postgresql.org/docs/) - Banco de dados

### 🛠️ **Ferramentas**

- [Biome](https://biomejs.dev/) - Linter e formatter
- [Ultracite](https://github.com/your-repo/ultracite) - Regras de código
- [pgvector](https://github.com/pgvector/pgvector) - Extensão PostgreSQL

---

<div align="center">
  
### ⭐ **Se este projeto foi útil, deixe uma estrela!** ⭐

<p>
  <strong>Feito com ❤️ e muita ☕ para a comunidade de desenvolvedores</strong>
</p>

<p>
  <a href="https://github.com/seu-usuario">
    <img src="https://img.shields.io/badge/GitHub-@seu--usuario-181717?style=for-the-badge&logo=github" alt="GitHub">
  </a>
  <a href="https://twitter.com/seu-usuario">
    <img src="https://img.shields.io/badge/Twitter-@seu--usuario-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter">
  </a>
  <a href="https://linkedin.com/in/seu-usuario">
    <img src="https://img.shields.io/badge/LinkedIn-seu--usuario-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
</p>

<p>
  <img src="https://forthebadge.com/images/badges/built-with-love.svg" alt="Built with Love">
  <img src="https://forthebadge.com/images/badges/powered-by-coffee.svg" alt="Powered by Coffee">
</p>

</div>
