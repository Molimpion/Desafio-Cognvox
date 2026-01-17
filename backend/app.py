from flask import Flask
from flask_cors import CORS
from config import Config
from extensions import db, ma, migrate
from routes.ator_routes import ator_bp
from routes.auth_routes import auth_bp

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    CORS(app)
    db.init_app(app)
    ma.init_app(app)
    migrate.init_app(app, db)

    import models 

    app.register_blueprint(ator_bp, url_prefix='/api/ator')
    app.register_blueprint(auth_bp, url_prefix='/api/auth')

    @app.route('/')
    def home():
        return {"status": "API Online", "mensagem": "Bem-vindo ao teste Cognvox!"}

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, port=5000)