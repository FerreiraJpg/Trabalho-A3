- Projeto destinado a A3 de Usabilidade, desenvolvimento web, mobile e jogos

--> Para iniciar o projeto:
Você deve baixar a pasta do projeto, entrar nela e no CMD utilizar o comando "npm i" para instalar todas as dependências.
Após isso você deve iniciar o Docker, utilizando o comando "docker compose up -d"
Criar um arquivo na pasta inicial chamada ".env" e alterar o que for nescessário com base no arquivo ".env.exemple"
Para iniciar o projeto basta utilizar o comando "npm run start:dev" no terminal


## Requisitos funcionais:
- [x] Deve ser possível se cadastrar
- [ ] Deve ser possível se autenticar
- [ ] Deve ser possível obter o perfil de um usuário logado
- [ ] Deve ser possível cadastrar um novo aluno
- [ ] Deve ser possível cadastrar um novo responsável
- [ ] Deve ser possível buscar alunos pelo nome 
- [ ] Deve ser possível buscar responsáveis pelo nome
- [ ] Deve ser possível atualizar informações dos alunos
- [ ] Deve ser possível atualizar informações dos responsáveis
- [ ] Deve ser possível atribuir um responsável a um aluno

## Regras de negócio:
- [ ] O usuário não deve poder se cadastrar com um email duplicado

## Requisitos não-funcionais
- [x] A senha do usuário deve estar criptografada
- [ ] Os dados devem estar persistidos em um banco de dados postgreSQL
- [ ] Todas as listas de dados precisam estar paginadas com 20 itens por página
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token)



