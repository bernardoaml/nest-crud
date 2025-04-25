<h1 align="center">Client Address API</h1>

<p align="center">Uma API RESTful construída com <a href="https://nestjs.com" target="_blank">NestJS</a> para gerenciar clientes e seus endereços com autenticação via JWT.</p>

<p align="center">
  <img src="https://img.shields.io/badge/NestJS-Backend-red.svg" alt="NestJS Badge" />
  <img src="https://img.shields.io/badge/PostgreSQL-Database-blue.svg" alt="PostgreSQL Badge" />
  <img src="https://img.shields.io/badge/Prisma-ORM-green.svg" alt="Prisma Badge" />
  <img src="https://img.shields.io/badge/JWT-Auth-yellow.svg" alt="JWT Badge" />
  <img src="https://img.shields.io/badge/Swagger-Docs-blueviolet.svg" alt="Swagger Badge" />
  <img src="https://img.shields.io/badge/Tested%20with-Jest-brightgreen.svg" alt="Jest Badge" />
</p>

---

## ✨ Sobre o Projeto

A **Client Address API** é uma aplicação backend desenvolvida como parte de um desafio técnico.  
Seu objetivo é gerenciar clientes e seus endereços com autenticação protegida por JWT, validações com DTOs, e documentação completa com Swagger.

---

## 🚀 Tecnologias Utilizadas

- ✅ NestJS
- ✅ PostgreSQL
- ✅ Prisma ORM
- ✅ JWT (JSON Web Token)
- ✅ Swagger (OpenAPI 3.0)
- ✅ Jest para testes unitários

---

## 📦 Como Rodar o Projeto Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/client-address-api.git
cd client-address-api
```
### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o arquivo .env
Substitua usuario, senha e nome_do_banco pelos seus dados locais.
```bash
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco?schema=public"
JWT_SECRET="sua_chave_jwt"
JWT_EXPIRES_IN="3600s"
```

### 4. Configurar o Banco de Dados
Rode as migrations com Prisma:

```bash
npx prisma migrate dev --name init
```
(Para abrir o Prisma Studio:)
```bash
npx prisma studio
```

### 5. Iniciar a Aplicação
```bash
npm run start:dev
```
A aplicação estará disponível em:  http://localhost:3000

### 6. Rodando Testes🧪
Execute os testes unitários:

```bash
npm run test
```
Para gerar o relatório de cobertura:
```bash
npm run test:cov
```
O relatório de cobertura será gerado na pasta /coverage/.

### 7. Acesso ao Swagger
Acesse a documentação Swagger em:
```bash
http://localhost:3000/api
```
Funcionalidades disponíveis:
<p>Fazer login (/auth/login)</p> 
<p>Obter token JWT</p>
<p>Autorizar no botão "Authorize" do Swagger</p>
<p>Testar todas as rotas protegidas</p>
<p>Visualizar exemplos de payloads para requests</p>

