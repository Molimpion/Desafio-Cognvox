from flask import Flask, jsonify
from flask_cors import CORS
from config import Config
from extensions import db, migrate, swagger
from routes.auth_routes import auth_bp
from routes.ator_routes import ator_bp
from errors import AppError

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    
    app.config['SWAGGER'] = {
        'title': 'Cognvox API',
        'uiversion': 3,
        'version': "1.0.0",
        'description': "API de Migração do Legado Cognvox",
    }
    
    CORS(app)
    db.init_app(app)
    migrate.init_app(app, db)
    swagger.init_app(app)

    app.register_blueprint(auth_bp, url_prefix='/api/auth')
    app.register_blueprint(ator_bp, url_prefix='/api/atores')

    @app.errorhandler(AppError)
    def handle_app_error(error):
        response = jsonify(error.to_dict())
        response.status_code = error.status_code
        return response

    @app.errorhandler(Exception)
    def handle_generic_error(error):
        if isinstance(error, AppError):
            return handle_app_error(error)
        return jsonify({"error": True, "message": "Erro interno do servidor."}), 500

    @app.route('/')
    def health_check():
        return {"system": "Cognvox API", "version": "1.0.0", "status": "online"}

    return app

app = create_app()

if __name__ == '__main__':
    with app.app_context():
        pass
    app.run(debug=True, port=5000)