from app.extensions import db
from .base import BaseModel

class TipoVinculo(BaseModel):
    __tablename__ = 'tipo_vinculo'
    id = db.Column('id', db.Integer, primary_key=True)
    descricao = db.Column('descricao', db.String(100))

class ParecerPsicologico(BaseModel):
    __tablename__ = 'parecer_psicologico'
    id = db.Column('id', db.Integer, primary_key=True)
    descricao = db.Column('descricao', db.String(255))

class Status(BaseModel):
    __tablename__ = 'status'
    codigo = db.Column('codigo', db.Integer, primary_key=True)
    descricao = db.Column('descricao', db.String(50))

class ModalidadeEnsino(BaseModel):
    __tablename__ = 'modalidade_ensino'
    id = db.Column('id', db.Integer, primary_key=True)
    descricao = db.Column('descricao', db.String(255))

class Idioma(BaseModel):
    __tablename__ = 'idioma'
    id = db.Column('id', db.Integer, primary_key=True)
    descricao = db.Column('descricao', db.String(100))

class Profissao(BaseModel):
    __tablename__ = 'profissao'
    id = db.Column('id', db.Integer, primary_key=True)
    descricao = db.Column('Descricao', db.String(255))

class Unidade(BaseModel):
    __tablename__ = 'unidade'
    id = db.Column('id', db.Integer, primary_key=True)
    nome_instituicao = db.Column('NomeInstituicao', db.String(255))
    cidade = db.Column('cidade', db.String(100))
    estado = db.Column('estado', db.String(2))