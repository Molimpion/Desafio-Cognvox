from extensions import db
from .base import BaseModel

class Ator(BaseModel):
    __tablename__ = 'ator'
    id = db.Column('Id', db.Integer, primary_key=True)
    nome = db.Column('Nome', db.String(255))
    cpf = db.Column('CPF', db.String(20))
    email = db.Column('Email', db.String(255))
    
    data_nascimento = db.Column('DataNascimento', db.Date)
    data_inicio_intervencao = db.Column('datainiciointervencao', db.Date)
    ano_sessao = db.Column('ano_sessao', db.String(10))
    
    telefone_cel = db.Column('TelefoneCel', db.String(50))
    telefone_fixo = db.Column('TelefoneFixo', db.String(50))
    
    reg_profissional = db.Column('RegProfissional', db.String(50))
    idioma_id = db.Column('idiomaId', db.Integer)
    
    endereco = db.Column('endereco', db.String(255))
    cidade = db.Column('cidade', db.String(100))
    estado = db.Column('estado', db.String(2))
    pais = db.Column('pais', db.String(50))
    
    hex_foto = db.Column('HexadecimalFoto', db.Text)
    
    unidade_id = db.Column('unidadeId', db.Integer, db.ForeignKey('unidade.id'))
    profissao_id = db.Column('profissaoId', db.Integer, db.ForeignKey('profissao.id'))
    modalidade_ensino_id = db.Column('ModalidadeEnsinoId', db.Integer, db.ForeignKey('modalidade_ensino.id'))
    status_cod = db.Column('status', db.Integer, db.ForeignKey('status.codigo'))

    unidade = db.relationship('Unidade', backref='atores')
    profissao = db.relationship('Profissao', backref='atores')
    modalidade = db.relationship('ModalidadeEnsino', backref='atores')
    status_rel = db.relationship('Status', backref='atores')
    
    usuario_vinculado = db.relationship('Usuario', primaryjoin="foreign(Usuario.email) == Ator.email", uselist=False, viewonly=True)