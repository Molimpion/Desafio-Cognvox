import base64
from extensions import db
from models import Ator, Usuario
from errors import ValidationError

class AtorService:
    @staticmethod
    def get_all():
        return [ator.to_dict() for ator in Ator.query.all()]

    @staticmethod
    def create(data):
        if Ator.query.filter_by(EMAIL=data.get('email')).first():
            raise ValidationError("Já existe esse email cadastrado em nossos registros!")

        try:
            novo_ator = Ator(
                NOME=data.get('nome'),
                EMAIL=data.get('email'),
                TELEFONECEL=data.get('telefone'),
                UNIDADEID=data.get('unidade_id'),
                STATUS=1,
                HEXADECIMALFOTO=""
            )
            db.session.add(novo_ator)
            db.session.flush()

            senha_b64 = base64.b64encode(data.get('senha').encode()).decode()
            
            novo_usuario = Usuario(
                USUARIO=data.get('login'),
                SENHA=senha_b64,
                NOME=data.get('nome'),
                EMAIL=data.get('email'),
                COD_EMPRESA=data.get('unidade_id'),
                COD_STATUS=1,
                COD_GRUPO_USUARIO=1,
                CPF=data.get('cpf')
            )
            db.session.add(novo_usuario)

            db.session.commit()

            return {
                "message": "Ator e Usuário criados com sucesso",
                "ator_id": novo_ator.ID,
                "usuario_id": novo_usuario.id
            }

        except Exception as e:
            db.session.rollback()
            raise e