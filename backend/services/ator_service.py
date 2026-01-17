import base64
from extensions import db
from models import Ator, Usuario
from errors import ValidationError, NotFoundError

class AtorService:
    @staticmethod
    def get_all():
        return [ator.to_dict() for ator in Ator.query.all()]

    @staticmethod
    def get_by_id(id):
        ator = Ator.query.get(id)
        if not ator:
            raise NotFoundError(f"Ator com ID {id} não encontrado")
        return ator

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

    @staticmethod
    def update(id, data):
        ator = AtorService.get_by_id(id)
        email_antigo = ator.EMAIL
        
        try:
            ator.NOME = data.get('nome', ator.NOME)
            ator.EMAIL = data.get('email', ator.EMAIL)
            ator.TELEFONECEL = data.get('telefone', ator.TELEFONECEL)
            ator.UNIDADEID = data.get('unidade_id', ator.UNIDADEID)

            usuario = Usuario.query.filter_by(EMAIL=email_antigo).first()
            if usuario:
                usuario.NOME = ator.NOME
                usuario.EMAIL = ator.EMAIL
                if 'senha' in data:
                    usuario.SENHA = base64.b64encode(data['senha'].encode()).decode()
            
            db.session.commit()
            return {"message": "Ator atualizado com sucesso", "ator": ator.to_dict()}
            
        except Exception as e:
            db.session.rollback()
            raise e

    @staticmethod
    def delete(id):
        ator = AtorService.get_by_id(id)
        
        try:
            usuario = Usuario.query.filter_by(EMAIL=ator.EMAIL).first()
            if usuario:
                db.session.delete(usuario)
            
            db.session.delete(ator)
            db.session.commit()
            return {"message": "Ator e vínculos removidos com sucesso"}

        except Exception as e:
            db.session.rollback()
            raise e