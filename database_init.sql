-- Script de Inicialização de Dados - Desafio Cognvox
USE cognvox_migracao;
INSERT INTO profissao (id, Descricao) VALUES 
(1, 'Ator DI'), 
(28, 'Aluno'), 
(3, 'Psicólogo'), 
(4, 'Professor');
INSERT INTO status (codigo, descricao) VALUES 
(1, 'Ativo'), 
(2, 'Inativo');
INSERT INTO modalidade_ensino (id, descricao) VALUES 
(1, 'Presencial'), 
(2, 'EAD');
INSERT INTO unidade (id, NomeInstituicao, cidade, estado) VALUES 
(1, 'Matriz Recife', 'Recife', 'PE');
INSERT INTO idioma (id, descricao) VALUES 
(1, 'Português'), 
(2, 'Inglês');
-- Senha original: 123456 (armazenada em Base64: MTIzNDU2)
INSERT INTO usuario1 (USUARIO, SENHA, NOME, EMAIL, COD_GRUPO_USUARIO, COD_STATUS, COD_EMPRESA) 
VALUES ('admin', 'MTIzNDU2', 'Administrador', 'admin@cognvox.net', 1, 1, 1);
INSERT INTO ator (NOME, EMAIL, PROFISSAOID, UNIDADEID, STATUS, ANO_SESSAO) 
VALUES ('Candidato Teste', 'teste@cognvox.net', 1, 1, 1, '2026');