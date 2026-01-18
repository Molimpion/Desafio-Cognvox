from app.extensions import db
from .base import BaseModel

class Ator(BaseModel):
    __tablename__ = 'ator'

    id = db.Column('ID', db.Integer, primary_key=True)
    nome = db.Column('NOME', db.String(255), nullable=False)
    data_nascimento = db.Column('DATANASCIMENTO', db.Date)
    data_inicio_intervencao = db.Column('DATAINICIOINTERVENCAO', db.Date)
    reg_profissional = db.Column('REGPROFISSIONAL', db.String(100))
    email = db.Column('EMAIL', db.String(255))
    telefone_cel = db.Column('TELEFONECEL', db.String(50))
    telefone_fixo = db.Column('TELEFONEFIXO', db.String(50))
    idioma_id = db.Column('IDIOMAID', db.Integer)
    endereco = db.Column('ENDERECO', db.Text)
    cidade = db.Column('CIDADE', db.String(100))
    estado = db.Column('ESTADO', db.String(100))
    pais = db.Column('PAIS', db.String(100))
    hex_foto = db.Column('HEXADECIMALFOTO', db.Text)
    ano_sessao = db.Column('ANO_SESSAO', db.String(20))
    cpf = db.Column('CPF', db.String(20))
    unidade_id = db.Column('UNIDADEID', db.Integer, db.ForeignKey('unidade.id'))
    profissao_id = db.Column('PROFISSAOID', db.Integer, db.ForeignKey('profissao.id'))
    modalidade_ensino_id = db.Column('MODALIDADEENSINOID', db.Integer, db.ForeignKey('modalidade_ensino.id'))
    status_cod = db.Column('STATUS', db.Integer, db.ForeignKey('status.codigo'), default=1)
    usuario_vinculado = db.relationship(
        'Usuario', 
        primaryjoin="foreign(Usuario.email) == Ator.email", 
        uselist=False, 
        viewonly=True
    )