## Documentação da API

#### Cria um novo usuario

```http
  POST /users
```

| Parâmetro  | Tipo     | Descrição                         |
| :--------- | :------- | :-------------------------------- |
| `name`     | `string` | **Obrigatório**. Nome do usuario  |
| `email`    | `string` | **Obrigatório**. Email do usuario |
| `cpf`      | `string` | **Obrigatório**. CPF do usario    |
| `password` | `string` | **Obrigatório**. Senha do usuario |

#### Retorna o token e dados do usuario

```http
  POST /users/login
```

| Parâmetro  | Tipo     | Descrição                         |
| :--------- | :------- | :-------------------------------- |
| `name`     | `string` | **Obrigatório**. Nome do usuario  |
| `password` | `string` | **Obrigatório**. Senha do usuario |

#### Retorna as informações do usuario

```http
  GET /users/getInfoProfile
```

| Parâmetro       | Tipo      | Descrição                         |
| :-------------- | :-------- | :-------------------------------- |
| `authorization` | `Bearer ` | **Obrigatório**. token do usuario |

#### Desloga o usuario

```http
  GET /users/logout
```

| Parâmetro       | Tipo      | Descrição                         |
| :-------------- | :-------- | :-------------------------------- |
| `authorization` | `Bearer ` | **Obrigatório**. token do usuario |
