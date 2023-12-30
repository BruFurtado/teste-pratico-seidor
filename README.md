# Teste Técnico Prático

Esse projeto trata-se da WebAPI um sistema web em que seja possível controlar a utilização dos automóveis de uma empresa. Foi seguido os Princípios SOLID e Design Patterns.

## RFs (Requisitos funcionais)

### Cadastro de usuários administradores:
- [x] Deve ser possível cadastrar um novo usuário;
- [x] Deve ser possível listar os usuários cadastrados;
- [x] Deve ser possível obter o perfil de um usuário logado pelo seu identificador único;
- [x] Deve ser possível editar os dados de um usuário;
- [x] Deve ser possível excluir um usuário;
- [x] Deve ser possível se autenticar/logar.

### Cadastro de automóvel:
- [x] Deve ser possível cadastrar um novo automóvel;
- [x] Deve ser possível atualizar um automóvel cadastrado;
- [x] Deve ser possível excluir um automóvel cadastrado;
- [x] Deve ser possível recuperar/buscar um automóvel cadastrado pelo seu identificador único;
- [x] Deve ser possível listar os automóveis cadastrados;
- [x] Deve ser possível filtrar a listagem dos automóveis por cor e marca.

### Cadastro de motoristas:
- [x] Deve ser possível cadastrar um novo motorista;
- [x] Deve ser possível atualizar um motorista cadastrado;
- [x] Deve ser possível excluir um motorista cadastrado;
- [x] Deve ser possível recuperar/buscar um motorista cadastrado pelo seu identificador único;
- [x] Deve ser possível listar os motoristas cadastrados;
- [x] Deve ser possível filtrar a listagem dos motoristas cadastrados por nome.

### Utilização de um automóvel:
- [x] Deve ser possível criar um registro que represente a utilização de um automóvel por um motorista, com uma data de início e um texto do motivo da utilização;
- [x] Deve ser possível finalizar a utilização de um automóvel por um motorista guardando a data de finalização;
- [x] Deve ser possível listar os registros de utilização cadastrados no sistema com o nome do motorista e as informações do automóvel utilizado.

## RNs (Regras de negócio)

### Cadastro de usuários administradores:
- [x] Não deve ser possível cadastrar mais de um usuário com o mesmo e-mail.

### Cadastro de automóvel:
- [x] Não deve ser possível cadastrar mais de um automóvel com a mesma placa.

### Cadastro de motoristas:
- [x] Não deve ser possível cadastrar mais de um motorista com o mesmo nome.

### Utilização de um automóvel:
- [x] Um automóvel só pode ser utilizado por um motorista por vez;
- [x] A data de início deve ser igual a data atual;
- [x] Ao finalizar um registro, a data de finalização deve ser igual a data atual;
- [x] Um motorista que já esteja utilizando um automóvel não pode utilizar outro automóvel ao mesmo tempo.

## RNFs (Requisitos não-funcionais)

- [x] A senha do usuário deve ser criptografada;
- [x] Os dados da aplicação precisam estar persistidas em um banco de dados PostgreSQL;
- [x] O usuário deve ser identificado por um JWT (JSON Web Token).

## Como executar a aplicação?

### Para instalar todas as dependências
```
npm i
```

### Para executar o banco de dados
```
docker compose up -d
```

### Para executar as migrations do banco de dados
```
npx prisma migrate deploy
```

### Para visualizar o banco de dados
```
npx prisma studio
```

## Como testar a aplicação?
```
npm run test
```

## O que ainda não foi implementado e melhorias
- Mais testes unitários
- Controllers e rotas
- DDD (Domain-Drive Design) e Clean Architecture