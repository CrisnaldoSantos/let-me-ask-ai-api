# 🚀 Let Me Ask AI - API

> Uma API moderna e robusta para integração com inteligência artificial, construída com as melhores tecnologias do ecossistema Node.js.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Fastify](https://img.shields.io/badge/Fastify-000000?style=for-the-badge&logo=fastify&logoColor=white)](https://www.fastify.io/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

## ✨ Características

- 🔥 **Fastify** - Framework web ultra-rápido e eficiente
- 🛡️ **TypeScript** - Tipagem estática para maior segurança
- ✅ **Zod** - Validação robusta de dados
- 🌐 **CORS** - Configurado para desenvolvimento e produção
- ⚡ **Hot Reload** - Desenvolvimento ágil com watch mode
- 📦 **ESM** - Módulos ES nativos

## 🚀 Início Rápido

### Pré-requisitos

- Node.js 18+ (recomendado: versão LTS mais recente)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone <seu-repositorio>
cd let-me-ask-ai-api

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
```

### Configuração

Crie um arquivo `.env` na raiz do projeto:

```env
# Porta do servidor (padrão: 3333)
PORT=3333
```

### Executando a aplicação

```bash
# Desenvolvimento (com hot reload)
npm run dev

# Produção
npm start
```

O servidor estará rodando em `http://localhost:3333` 🎉

## 📁 Estrutura do Projeto

```
let-me-ask-ai-api/
├── src/
│   ├── env.ts         # Configuração e validação de variáveis de ambiente
│   └── server.ts      # Configuração principal do servidor
├── package.json       # Dependências e scripts
├── tsconfig.json      # Configuração do TypeScript
└── README.md         # Este arquivo
```

## 🛠️ Stack Tecnológica

| Tecnologia        | Versão   | Descrição                              |
| ----------------- | -------- | -------------------------------------- |
| **Node.js**       | 18+      | Runtime JavaScript                     |
| **TypeScript**    | ^5.8.3   | Superset tipado do JavaScript          |
| **Fastify**       | ^5.4.0   | Framework web de alta performance      |
| **Zod**           | ^3.25.75 | Validação de esquemas TypeScript-first |
| **@fastify/cors** | ^11.0.1  | Plugin CORS para Fastify               |

## 📝 Scripts Disponíveis

```bash
# Inicia o servidor em modo de desenvolvimento
npm run dev

# Inicia o servidor em modo de produção
npm start
```

## 🔧 Configuração Avançada

### Variáveis de Ambiente

| Variável | Tipo   | Padrão | Descrição         |
| -------- | ------ | ------ | ----------------- |
| `PORT`   | number | 3333   | Porta do servidor |

### CORS

A API está configurada com CORS habilitado para:

- Todas as origens em desenvolvimento
- Métodos: GET, POST, PUT, DELETE
- Headers permitidos: Content-Type, Authorization

## 🚦 Status da API

- ✅ Servidor Fastify configurado
- ✅ CORS habilitado
- ✅ Validação com Zod
- ✅ TypeScript configurado
- ✅ Hot reload em desenvolvimento

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🔗 Links Úteis

- [Documentação do Fastify](https://www.fastify.io/docs/)
- [Documentação do TypeScript](https://www.typescriptlang.org/docs/)
- [Documentação do Zod](https://zod.dev/)

---

<div align="center">
  <p>Feito com ❤️ para a comunidade de desenvolvedores</p>
</div>
