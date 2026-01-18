CREATE DATABASE IF NOT EXISTS cognvox_migracao;
USE cognvox_migracao;

CREATE TABLE profissao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Descricao VARCHAR(255)
);

CREATE TABLE modalidade_ensino (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(255)
);

CREATE TABLE status (
    codigo INT PRIMARY KEY,
    descricao VARCHAR(50)
);

CREATE TABLE idioma (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(100)
);

CREATE TABLE tipo_vinculo (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(100)
);

CREATE TABLE parecer_psicologico (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(255)
);

CREATE TABLE unidade (
    id INT AUTO_INCREMENT PRIMARY KEY,
    NomeInstituicao VARCHAR(255),
    cidade VARCHAR(100),
    estado CHAR(2),
    logoinstituicao VARCHAR(255)
);

CREATE TABLE ator (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(255) NOT NULL,
    CPF VARCHAR(20),
    Email VARCHAR(255),
    DataNascimento DATE,
    datainiciointervencao DATE,
    ano_sessao VARCHAR(20),
    TelefoneCel VARCHAR(50),
    TelefoneFixo VARCHAR(50),
    RegProfissional VARCHAR(100),
    idiomaId INT,
    unidadeId INT,
    profissaoId INT,
    ModalidadeEnsinoId INT,
    status INT,
    endereco TEXT,
    cidade VARCHAR(100),
    estado VARCHAR(100),
    pais VARCHAR(100),
    HexadecimalFoto LONGTEXT, 
    
    FOREIGN KEY (profissaoId) REFERENCES profissao(id),
    FOREIGN KEY (unidadeId) REFERENCES unidade(id),
    FOREIGN KEY (ModalidadeEnsinoId) REFERENCES modalidade_ensino(id),
    FOREIGN KEY (status) REFERENCES status(codigo)
);


CREATE TABLE usuario1 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    USUARIO VARCHAR(255),
    SENHA VARCHAR(255),
    COD_EMPRESA INT,
    NOME VARCHAR(255),
    EMAIL VARCHAR(255),
    COD_STATUS INT,
    COD_GRUPO_USUARIO INT,
    COD_NIVEL INT DEFAULT 1,
    PRIMEIRO_ACESSO INT DEFAULT 1,
    ERROS_LOGIN INT DEFAULT 0,
    CPF VARCHAR(20)
);


CREATE TABLE seg_usuario1 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    USUARIO VARCHAR(255),
    SENHA VARCHAR(255),
    COD_STATUS INT,
    COD_ORDENACAO INT 
);

CREATE TABLE ator_vinculo_di (
    id INT AUTO_INCREMENT PRIMARY KEY,
    atorId INT,      
    atorDIId INT,     -- Aluno (DI)
    TipoVinculoId INT,
    FOREIGN KEY (atorId) REFERENCES ator(Id),
    FOREIGN KEY (atorDIId) REFERENCES ator(Id),
    FOREIGN KEY (TipoVinculoId) REFERENCES tipo_vinculo(Id)
);

CREATE TABLE plano_trabalho (
    id INT AUTO_INCREMENT PRIMARY KEY,
    atorDIId INT,
    DataInicialInteracao DATE,
    atorInteracionalId INT,
    atorProfessorId INT,
    atorPsicologoId INT,
    FOREIGN KEY (atorDIId) REFERENCES ator(Id),
    FOREIGN KEY (atorInteracionalId) REFERENCES ator(Id),
    FOREIGN KEY (atorProfessorId) REFERENCES ator(Id),
    FOREIGN KEY (atorPsicologoId) REFERENCES ator(Id)
);

CREATE TABLE quadro_psicopedagogico (
    id INT AUTO_INCREMENT PRIMARY KEY,
    AtorId INT,
    parecerpsicologicoid INT,
    FOREIGN KEY (AtorId) REFERENCES ator(Id),
    FOREIGN KEY (parecerpsicologicoid) REFERENCES parecer_psicologico(id)
);

CREATE TABLE sessao_observacao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    atorid INT,
    status VARCHAR(50),
    numerosessao INT,
    TituloSessao VARCHAR(255),
    DESCRICAO TEXT,
    FOREIGN KEY (atorid) REFERENCES ator(Id)
);

INSERT INTO profissao (id, Descricao) VALUES (1, 'Ator DI'), (28, 'Aluno'), (3, 'Psicólogo'), (4, 'Professor'), (100, 'Administrador');
INSERT INTO status (codigo, descricao) VALUES (1, 'Ativo'), (2, 'Inativo');
INSERT INTO modalidade_ensino (descricao) VALUES ('Presencial'), ('EAD');
INSERT INTO tipo_vinculo (descricao) VALUES ('Mãe'), ('Pai'), ('Responsável Legal');
INSERT INTO unidade (NomeInstituicao, cidade, estado) VALUES ('Matriz Recife', 'Recife', 'PE');