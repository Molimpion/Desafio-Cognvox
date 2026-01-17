from extensions import db
from .base import BaseModel

class Unidade(BaseModel):
    __tablename__ = 'unidade'
    id = db.Column(db.Integer, primary_key=True)
    nome_instituicao = db.Column('NomeInstituicao', db.String(255))
    cidade = db.Column(db.String(100))
    estado = db.Column(db.String(2))
    logo_instituicao = db.Column('logoinstituicao', db.String(255))