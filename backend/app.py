from flask import Flask
from flask_cors import CORS
from config import Config
from extensions import db
from models import Ator, Usuario, Unidade

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    
    CORS(app)
    db.init_app(app)

    @app.route('/')
    def home():
        return {"status": "Backend Python Online", "missao": "Migração Cognvox"}

    return app

app = create_app()

if __name__ == '__main__':
    with app.app_context():
        # db.create_all() # Comentado para não dar erro se o MySQL não estiver rodando ainda
        pass
    app.run(debug=True, port=5000)