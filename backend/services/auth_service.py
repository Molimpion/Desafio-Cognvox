import base64
import jwt
import datetime
import os
from werkzeug.exceptions import Unauthorized
from repositories.usuario_repository import UsuarioRepository

class AuthService:
    def __init__(self):
        self.repo = UsuarioRepository()

    def login(self, data):
        login_input = data['usuario']
        senha_input = data['senha']

        usuario = self.repo.get_by_login(login_input)
        
        if not usuario:
            raise Unauthorized("Usuário ou senha inválidos")

        try:
            senha_input_b64 = base64.b64encode(senha_input.encode()).decode()
            
            if usuario.senha != senha_input_b64:
                raise Unauthorized("Usuário ou senha inválidos")
                
        except Exception:
            raise Unauthorized("Erro na validação das credenciais")

        token = self._generate_token(usuario)
        
        return {
            "token": token,
            "usuario": {
                "id": usuario.id,
                "nome": usuario.nome,
                "email": usuario.email,
                "grupo": usuario.cod_grupo_usuario
            }
        }

    def _generate_token(self, usuario):
        payload = {
            'sub': usuario.id,
            'name': usuario.nome,
            'grupo': usuario.cod_grupo_usuario,
            'iat': datetime.datetime.utcnow(),
            'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=24)
        }
        
        secret = os.getenv('SECRET_KEY', 'dev_key')
        return jwt.encode(payload, secret, algorithm='HS256')