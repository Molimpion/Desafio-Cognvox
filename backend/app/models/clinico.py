from app.extensions import db
from .base import BaseModel

class ParecerPsicologico(BaseModel):
    __tablename__ = 'parecer_psicologico'
    id = db.Column(db.Integer, primary_key=True)
    descricao = db.Column('descricao', db.String(255))

class QuadroPsicopedagogico(BaseModel):
    __tablename__ = 'quadro_psicopedagogico'
    id = db.Column(db.Integer, primary_key=True)
    ator_id = db.Column('AtorId', db.Integer, db.ForeignKey('ator.Id'))
    parecer_id = db.Column('parecerpsicologicoid', db.Integer, db.ForeignKey('parecer_psicologico.id'))
    
    parecer = db.relationship('ParecerPsicologico')

class SessaoObservacao(BaseModel):
    __tablename__ = 'sessao_observacao'
    id = db.Column(db.Integer, primary_key=True)
    ator_id = db.Column('atorid', db.Integer, db.ForeignKey('ator.Id'))
    descricao = db.Column('DESCRICAO', db.Text)
    titulo = db.Column('TituloSessao', db.String(255))
    numero_sessao = db.Column('numerosessao', db.Integer)
    status = db.Column('status', db.String(50))