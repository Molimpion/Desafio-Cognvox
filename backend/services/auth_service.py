import jwt
import datetime
import base64
from flask import current_app
from models import Usuario
from errors import AuthenticationError

class AuthService:
    @staticmethod
    def login(usuario, senha_input):
        user = Usuario.query.filter_by(USUARIO=usuario).first()
        if not user:
            raise AuthenticationError("Usuário ou senha inválidos")

        try:
            senha_b64 = base64.b64encode(senha_input.encode()).decode()
        except Exception:
            raise AuthenticationError("Formato de senha inválido")

        if user.SENHA != senha_b64:
            raise AuthenticationError("Usuário ou senha inválidos")

        token_payload = {
            'user_id': user.id,
            'user_nome': user.NOME,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=4)
        }
        
        token = jwt.encode(token_payload, current_app.config['SECRET_KEY'], algorithm="HS256")

        return {
            "token": token,
            "user": {
                "id": user.id,
                "nome": user.NOME,
                "email": user.EMAIL
            }
        }