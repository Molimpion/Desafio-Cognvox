from extensions import db
from .base import BaseModel

class Usuario(BaseModel):
    __tablename__ = 'usuario1'
    
    id = db.Column(db.Integer, primary_key=True)
    usuario = db.Column('USUARIO', db.String(255))
    senha = db.Column('SENHA', db.String(255)) 
    nome = db.Column('NOME', db.String(255))
    email = db.Column('EMAIL', db.String(255))
    cpf = db.Column('CPF', db.String(20))
    cod_empresa = db.Column('COD_EMPRESA', db.Integer)
    cod_status = db.Column('COD_STATUS', db.Integer)
    cod_grupo_usuario = db.Column('COD_GRUPO_USUARIO', db.Integer)    
    cod_nivel = db.Column('COD_NIVEL', db.Integer, default=1)