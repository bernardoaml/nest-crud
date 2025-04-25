📚 Client Address API
API RESTful desenvolvida em NestJS para gerenciamento de Clientes e seus Endereços.
Esta aplicação foi construída como parte de um teste técnico, seguindo boas práticas de autenticação, documentação e testes.

🚀 Tecnologias Utilizadas
NestJS

PostgreSQL

Prisma ORM

JWT Authentication

Swagger - OpenAPI 3.0

Jest para testes unitários

Docker (opcional, se quiser dockerizar)

🛠️ Instruções para Rodar o Projeto Localmente
1. Clonar o repositório
bash
Copiar
Editar
git clone <URL-DO-SEU-REPOSITORIO>
cd client-address-api
2. Instalar as dependências
bash
Copiar
Editar
npm install
3. Configurar variáveis de ambiente
Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

env
Copiar
Editar
DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco?schema=public"
JWT_SECRET="sua_chave_jwt"
JWT_EXPIRES_IN="3600s"
🔥 Substitua usuario, senha e nome_do_banco pelos seus valores locais.

4. Configurar o Banco de Dados
Inicializar o Prisma:

bash
Copiar
Editar
npx prisma migrate dev --name init
(Opcional) Visualizar o banco:

bash
Copiar
Editar
npx prisma studio
5. Rodar a aplicação
bash
Copiar
Editar
npm run start:dev
A aplicação ficará disponível em:

arduino
Copiar
Editar
http://localhost:3000
🧪 Executar os Testes
Para rodar os testes unitários:

bash
Copiar
Editar
npm run test
Para visualizar a cobertura de testes:

bash
Copiar
Editar
npm run test:cov
Relatório será gerado na pasta /coverage/.

📄 Acessar a Documentação Swagger
Após iniciar a aplicação, a documentação Swagger estará disponível em:

bash
Copiar
Editar
http://localhost:3000/api
No Swagger você poderá:

Fazer login e gerar JWT (/auth/login)

Autorizar usando Bearer Token

Testar todos os endpoints protegidos

Visualizar todos os modelos (DTOs) e exemplos

✅ Funcionalidades implementadas
 CRUD de Clientes

 CRUD de Endereços

 Autenticação JWT

 Proteção de rotas com Guards

 Validação de dados via DTOs

 Tratamento global de erros

 Documentação completa via Swagger

 Testes unitários com Jest

📂 Estrutura de Pastas
cpp
Copiar
Editar
src/
 ├── app.module.ts
 ├── main.ts
 ├── prisma/
 │    ├── prisma.module.ts
 │    └── prisma.service.ts
 ├── modules/
 │    ├── auth/
 │    ├── clients/
 │    └── addresses/
 ├── common/
 │    └── filters/
 │         └── http-exception.filter.ts
test/
 ├── prisma.mock.ts
👨‍💻 Autor
Desenvolvido por Bernardo Andrade M. e Lima para o processo seletivo.

🎯 Observação
Caso tenha qualquer dúvida ao rodar o projeto ou configurar o ambiente, basta abrir uma issue no repositório ou entrar em contato.

