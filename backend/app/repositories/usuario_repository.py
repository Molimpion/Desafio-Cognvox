from app.models import Usuario
from app.extensions import db

class UsuarioRepository:
    def get_by_login(self, login):
        return Usuario.query.filter_by(usuario=login).first()
    
    def get_by_id(self, id):
        return Usuario.query.get(id)