from app.extensions import db
from .base import BaseModel

class AtorVinculoDI(BaseModel):
    __tablename__ = 'ator_vinculo_di'
    
    id = db.Column('id', db.Integer, primary_key=True)
    ator_id = db.Column('ATORID', db.Integer, db.ForeignKey('ator.ID'))
    ator_di_id = db.Column('ATORDIID', db.Integer, db.ForeignKey('ator.ID'))
    tipo_vinculo_id = db.Column('TIPOVINCULOID', db.Integer, db.ForeignKey('tipo_vinculo.id'))

class PlanoTrabalho(BaseModel):
    __tablename__ = 'plano_trabalho'

    id = db.Column('id', db.Integer, primary_key=True)
    ator_di_id = db.Column('ATORDIID', db.Integer, db.ForeignKey('ator.ID'))
    data_inicial = db.Column('DATAINICIALINTERACAO', db.Date)
    ator_interacional_id = db.Column('atorInteracionalId', db.Integer, db.ForeignKey('ator.ID'))
    ator_professor_id = db.Column('atorProfessorId', db.Integer, db.ForeignKey('ator.ID'))
    ator_psicologo_id = db.Column('atorPsicologoId', db.Integer, db.ForeignKey('ator.ID'))