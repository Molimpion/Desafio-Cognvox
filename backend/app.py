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

    @app.route('/test-db')
    def test_db():
        try:
            count = db.session.query(Ator).count()
            return {"status": "success", "message": f"Conexão OK! {count} atores no banco."}
        except Exception as e:
            return {"status": "error", "message": str(e)}, 500

    return app

app = create_app()

if __name__ == '__main__':
    with app.app_context():
        pass
    app.run(debug=True, port=5000)