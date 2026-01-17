CREATE DATABASE IF NOT EXISTS cognvox_migracao;
USE cognvox_migracao;

CREATE TABLE profissao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Descricao VARCHAR(255) NOT NULL
);

CREATE TABLE unidade (
    id INT AUTO_INCREMENT PRIMARY KEY,
    NomeInstituicao VARCHAR(255),
    cidade VARCHAR(100),
    estado CHAR(2),
    logoinstituicao VARCHAR(255)
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
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(100)
);

CREATE TABLE parecer_psicologico (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(255)
);

CREATE TABLE ator (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NOME VARCHAR(255) NOT NULL,
    DATANASCIMENTO DATE,
    DATAINICIOINTERVENCAO DATE,
    REGPROFISSIONAL VARCHAR(100),
    EMAIL VARCHAR(255),
    TELEFONECEL VARCHAR(50),
    TELEFONEFIXO VARCHAR(50),
    IDIOMAID INT,
    UNIDADEID INT,
    PROFISSAOID INT,
    ENDERECO TEXT,
    CIDADE VARCHAR(100),
    ESTADO VARCHAR(100),
    PAIS VARCHAR(100),
    HEXADECIMALFOTO LONGTEXT,
    MODALIDADEENSINOID INT,
    STATUS INT,
    ANO_SESSAO VARCHAR(20),
    CPF VARCHAR(20),
    FOREIGN KEY (PROFISSAOID) REFERENCES profissao(id),
    FOREIGN KEY (UNIDADEID) REFERENCES unidade(id),
    FOREIGN KEY (MODALIDADEENSINOID) REFERENCES modalidade_ensino(id),
    FOREIGN KEY (STATUS) REFERENCES status(codigo)
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
    ATORID INT,
    ATORDIID INT,
    TIPOVINCULOID INT,
    FOREIGN KEY (ATORID) REFERENCES ator(ID),
    FOREIGN KEY (ATORDIID) REFERENCES ator(ID),
    FOREIGN KEY (TIPOVINCULOID) REFERENCES tipo_vinculo(id)
);

CREATE TABLE plano_trabalho (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ATORDIID INT,
    DATAINICIALINTERACAO DATE,
    atorInteracionalId INT,
    atorProfessorId INT,
    atorPsicologoId INT,
    FOREIGN KEY (ATORDIID) REFERENCES ator(ID),
    FOREIGN KEY (atorInteracionalId) REFERENCES ator(ID),
    FOREIGN KEY (atorProfessorId) REFERENCES ator(ID),
    FOREIGN KEY (atorPsicologoId) REFERENCES ator(ID)
);

CREATE TABLE quadro_psicopedagogico (
    id INT AUTO_INCREMENT PRIMARY KEY,
    AtorId INT,
    parecerpsicologicoid INT,
    FOREIGN KEY (AtorId) REFERENCES ator(ID),
    FOREIGN KEY (parecerpsicologicoid) REFERENCES parecer_psicologico(id)
);

CREATE TABLE sessao_observacao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    atorid INT,
    status VARCHAR(50),
    numerosessao INT,
    TituloSessao VARCHAR(255),
    DESCRICAO TEXT,
    FOREIGN KEY (atorid) REFERENCES ator(ID)
);

INSERT INTO profissao (id, Descricao) VALUES (1, 'Ator DI'), (28, 'Aluno'), (3, 'Psicólogo'), (4, 'Professor');
INSERT INTO status (codigo, descricao) VALUES (1, 'Ativo'), (2, 'Inativo');
INSERT INTO modalidade_ensino (descricao) VALUES ('Presencial'), ('EAD');
INSERT INTO unidade (NomeInstituicao, cidade, estado) VALUES ('Matriz Recife', 'Recife', 'PE');