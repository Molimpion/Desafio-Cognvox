from flask import Flask
from flask_cors import CORS
from app.config import Config
from app.extensions import db, ma, migrate

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    CORS(app)
    db.init_app(app)
    ma.init_app(app)
    migrate.init_app(app, db)

    from app import models 
    from app.routes.ator_routes import ator_bp
    from app.routes.auth_routes import auth_bp
    
    app.register_blueprint(ator_bp, url_prefix='/api/ator')
    app.register_blueprint(auth_bp, url_prefix='/api/auth')

    @app.route('/')
    def home():
        return {"status": "API Online", "mensagem": "Estrutura Enterprise (Padrão Miguel)"}

    return app