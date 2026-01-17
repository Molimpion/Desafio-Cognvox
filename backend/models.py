from extensions import db

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
    UNIDADEID = db.Column(db.Integer, db.ForeignKey('unidade.id'))
    HEXADECIMALFOTO = db.Column(db.Text)
    STATUS = db.Column(db.Integer)
    
    unidade = db.relationship('Unidade', backref='atores')

class Usuario(db.Model):
    __tablename__ = 'usuario1'
    id = db.Column(db.Integer, primary_key=True)
    USUARIO = db.Column(db.String(255))
    SENHA = db.Column(db.String(255)) 
    EMAIL = db.Column(db.String(255))