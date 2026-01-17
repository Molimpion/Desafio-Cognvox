from app.extensions import db
from .base import BaseModel

class AtorVinculoDI(BaseModel):
    __tablename__ = 'ator_vinculo_di'
    
    ator_di_id = db.Column('atorDIId', db.Integer, db.ForeignKey('ator.Id'), primary_key=True)
    ator_id = db.Column('atorId', db.Integer, db.ForeignKey('ator.Id'), primary_key=True)
    tipo_vinculo_id = db.Column('TipoVinculoId', db.Integer, db.ForeignKey('tipo_vinculo.Id'))

    aluno = db.relationship('Ator', foreign_keys=[ator_di_id], backref='responsaveis_vinculados')
    responsavel = db.relationship('Ator', foreign_keys=[ator_id], backref='alunos_vinculados')
    tipo_vinculo = db.relationship('TipoVinculo')

class PlanoTrabalho(BaseModel):
    __tablename__ = 'plano_trabalho'
    
    id = db.Column(db.Integer, primary_key=True)
    ator_di_id = db.Column('atorDIId', db.Integer, db.ForeignKey('ator.Id'))
    data_inicial = db.Column('DataInicialInteracao', db.Date)
    
    ator_interacional_id = db.Column('atorInteracionalId', db.Integer, db.ForeignKey('ator.Id'))
    ator_professor_id = db.Column('atorProfessorId', db.Integer, db.ForeignKey('ator.Id'))
    ator_psicologo_id = db.Column('atorPsicologoId', db.Integer, db.ForeignKey('ator.Id'))

    aluno = db.relationship('Ator', foreign_keys=[ator_di_id])
    par_interacional = db.relationship('Ator', foreign_keys=[ator_interacional_id])
    professor = db.relationship('Ator', foreign_keys=[ator_professor_id])
    psicologo = db.relationship('Ator', foreign_keys=[ator_psicologo_id])