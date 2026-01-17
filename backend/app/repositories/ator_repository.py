from app.models import Ator, Usuario
from app.extensions import db

class AtorRepository:
    def get_all(self):
        return Ator.query.all()

    def get_by_id(self, id):
        return Ator.query.get(id)

    def get_by_email(self, email):
        return Ator.query.filter_by(email=email).first()

    def create_transaction(self, ator: Ator, usuario: Usuario):
        try:
            db.session.add(ator)
            db.session.flush()
            db.session.add(usuario)
            db.session.commit()
            return ator
        except Exception as e:
            db.session.rollback()
            raise e

    def update(self, ator: Ator):
        try:
            db.session.commit()
            return ator
        except Exception as e:
            db.session.rollback()
            raise e

    def delete(self, ator: Ator):
        try:
            usuario = Usuario.query.filter_by(email=ator.email).first()
            if usuario:
                db.session.delete(usuario)
            db.session.delete(ator)
            db.session.commit()
        except Exception as e:
            db.session.rollback()
            raise e