import base64
from app.repositories.ator_repository import AtorRepository
from app.models import Ator, Usuario
from werkzeug.exceptions import BadRequest, NotFound

class AtorService:
    def __init__(self):
        self.repo = AtorRepository()

    def get_all(self):
        return self.repo.get_all()

    def get_by_id(self, id):
        ator = self.repo.get_by_id(id)
        if not ator:
            raise NotFound(f"Ator {id} não encontrado")
        return ator

    def create(self, data):
        # 1. Verifica duplicidade
        if self.repo.get_by_email(data['email']):
            raise BadRequest("Email já cadastrado")

        login = data.pop('login', None)
        senha = data.pop('senha', None)
        grupo_usuario = data.pop('grupo_usuario', 1)
        novo_ator = Ator(**data)
        
        if not novo_ator.status_cod:
            novo_ator.status_cod = 1

        senha_encoded = base64.b64encode(senha.encode()).decode()
        
        novo_usuario = Usuario(
            usuario=login,
            senha=senha_encoded,
            nome=data['nome'],
            email=data['email'],
            cod_empresa=data.get('unidade_id'),
            cod_status=1,
            cod_grupo_usuario=grupo_usuario,
            cpf=data.get('cpf')
        )

        return self.repo.create_transaction(novo_ator, novo_usuario)

    def update(self, id, data):
        ator = self.get_by_id(id)
        for key, value in data.items():
            if hasattr(ator, key):
                setattr(ator, key, value)
        return self.repo.update(ator)

    def delete(self, id):
        ator = self.get_by_id(id)
        self.repo.delete(ator)