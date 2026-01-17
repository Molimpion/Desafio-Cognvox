from extensions import db
from .base import BaseModel

class Status(BaseModel):
    __tablename__ = 'status'
    codigo = db.Column(db.Integer, primary_key=True)
    descricao = db.Column('descricao', db.String(255))

class Profissao(BaseModel):
    __tablename__ = 'profissao'
    id = db.Column(db.Integer, primary_key=True)
    descricao = db.Column('Descricao', db.String(255))

class ModalidadeEnsino(BaseModel):
    __tablename__ = 'modalidade_ensino'
    id = db.Column(db.Integer, primary_key=True)
    descricao = db.Column('descricao', db.String(255))

class TipoVinculo(BaseModel):
    __tablename__ = 'tipo_vinculo'
    id = db.Column('Id', db.Integer, primary_key=True)
    descricao = db.Column('descricao', db.String(255))