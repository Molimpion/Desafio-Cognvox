from extensions import db

class Status(db.Model):
    __tablename__ = 'status'
    codigo = db.Column(db.Integer, primary_key=True)
    descricao = db.Column(db.String(50))

class Profissao(db.Model):
    __tablename__ = 'profissao'
    id = db.Column(db.Integer, primary_key=True)
    Descricao = db.Column(db.String(255))

class ModalidadeEnsino(db.Model):
    __tablename__ = 'modalidade_ensino'
    id = db.Column(db.Integer, primary_key=True)
    descricao = db.Column(db.String(255))

class Unidade(db.Model):
    __tablename__ = 'unidade'
    id = db.Column(db.Integer, primary_key=True)
    NomeInstituicao = db.Column(db.String(255))
    cidade = db.Column(db.String(100))
    estado = db.Column(db.String(2))

class Ator(db.Model):
    __tablename__ = 'ator'
    ID = db.Column(db.Integer, primary_key=True)
    NOME = db.Column(db.String(255), nullable=False)
    EMAIL = db.Column(db.String(255))
    TELEFONECEL = db.Column(db.String(50))
    UNIDADEID = db.Column(db.Integer, db.ForeignKey('unidade.id'))
    PROFISSAOID = db.Column(db.Integer, db.ForeignKey('profissao.id'))
    MODALIDADEENSINOID = db.Column(db.Integer, db.ForeignKey('modalidade_ensino.id'))
    STATUS = db.Column(db.Integer, db.ForeignKey('status.codigo'))
    HEXADECIMALFOTO = db.Column(db.Text)
    CPF = db.Column(db.String(20))
    
    unidade = db.relationship('Unidade', backref='atores')
    status_rel = db.relationship('Status', backref='atores')

    def to_dict(self):
        return {
            "id": self.ID,
            "nome": self.NOME,
            "email": self.EMAIL,
            "unidade_id": self.UNIDADEID
        }

class Usuario(db.Model):
    __tablename__ = 'usuario1'
    
    id = db.Column(db.Integer, primary_key=True)
    USUARIO = db.Column(db.String(255))
    SENHA = db.Column(db.String(255)) 
    COD_EMPRESA = db.Column(db.Integer)
    NOME = db.Column(db.String(255))
    EMAIL = db.Column(db.String(255))
    COD_STATUS = db.Column(db.Integer)
    COD_GRUPO_USUARIO = db.Column(db.Integer)
    COD_NIVEL = db.Column(db.Integer, default=1)
    PRIMEIRO_ACESSO = db.Column(db.Integer, default=1)
    ERROS_LOGIN = db.Column(db.Integer, default=0)
    CPF = db.Column(db.String(20))