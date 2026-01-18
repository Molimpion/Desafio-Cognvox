# Desafio Fullstack Cognvox - Migração de Atores

*Repositório da solução para o desafio técnico de migração e gerenciamento de atores.*

### Frontend e Interface
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![Material UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)

### Backend e Banco de Dados
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white) ![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white) ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white) ![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-D71F00?style=for-the-badge&logo=sqlalchemy&logoColor=white)

### Ferramentas
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![Marshmallow](https://img.shields.io/badge/Marshmallow-E01563?style=for-the-badge) ![Alembic](https://img.shields.io/badge/Migrations-Alembic-blue)

---

## 1. Visão Geral

Este projeto é uma aplicação Fullstack desenvolvida para gerenciar o processo de migração de atores, integrando dados clínicos, profissionais e vínculos. A solução foca em **integridade de dados**, **autenticação segura** e uma **interface de usuário intuitiva**.

**Aplicação Web:** [http://localhost:5173](https://www.google.com/search?q=http://localhost:5173)

**API Backend:** [http://localhost:5000](https://www.google.com/search?q=http://localhost:5000)

## 2. Status do Projeto

Todos os requisitos mandatórios foram entregues:

* [x] **Persistência:** Banco de Dados MySQL com modelagem relacional completa.
* [x] **Migrations:** Controle de versão do esquema via Flask-Migrate.
* [x] **Autenticação:** Proteção de rotas via JWT (JSON Web Tokens).
* [x] **Backend:** Arquitetura Service-Repository com validação Marshmallow.
* [x] **Frontend:** Dashboard moderno com Material UI e React Hooks.

## 3. Arquitetura

O sistema é dividido em duas camadas principais que se comunicam via REST API:

## 4. Como Executar o Projeto Localmente

### Pré-requisitos

* Python 3.10+ e Node.js instalado.
* Instância do MySQL rodando localmente.

### Passo 1: Preparação do Banco de Dados

1. Crie o esquema no seu MySQL:
```sql
CREATE DATABASE cognvox_migracao;

```

### Passo 2: Configuração do Backend (Terminal 1)

1. Acesse a pasta do backend:
```bash
cd backend

```

2. Crie e ative o ambiente virtual:
```bash
python -m venv venv
source venv/Scripts/activate  # No Windows: venv\Scripts\activate

```

3. Instale as dependências e aplique as migrações:
```bash
pip install -r requirements.txt
python -m flask db upgrade

```

4. Inicie o servidor:
```bash
python run.py

```

---

### Passo 3: Inicialização de Dados (`database_init.sql`)

> **IMPORTANTE:** Após rodar as migrations, as tabelas estarão criadas, porém vazias. Para que o login e os formulários funcionem corretamente, é necessário popular os dados iniciais.

1. Localize o arquivo `database_init.sql` na raiz do projeto.
2. Execute-o no seu MySQL Workbench ou CLI.
3. Este script realiza:
* **Criação do usuário Admin** (Login: `admin` | Senha: `123456`).
* **Cadastro de domínios obrigatórios:** Profissões (Ator DI, Aluno, etc), Unidades, Idiomas e Status.
  
---

### Passo 4: Configuração do Frontend (Terminal 2)

1. Acesse a pasta do frontend e instale as dependências:
```bash
cd frontend
npm install

```

2. Inicie a aplicação:
```bash
npm run dev

```

## 5. Endpoints da API

Abaixo estão os principais endpoints da aplicação. Para as rotas de atores, é necessário enviar o Token JWT no cabeçalho da requisição (`Authorization: Bearer <TOKEN>`).

### Autenticação (`/api/auth`)
| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `POST` | `/login` | Realiza o login e retorna o Token JWT e dados do usuário. |

### Atores (`/api/atores`)
| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `GET` | `/` | Retorna a lista completa de atores cadastrados. |
| `POST` | `/` | Realiza a inclusão de um novo ator e seus respectivos dados clínicos. |
| `GET` | `/:id` | Busca os detalhes de um ator específico pelo ID. |

### Domínios e Auxiliares
| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `GET` | `/api/profissoes` | Lista as profissões disponíveis para o formulário. |
| `GET` | `/api/unidades` | Lista as instituições/unidades cadastradas. |
