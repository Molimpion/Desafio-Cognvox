from flask import Blueprint, request, jsonify
from app.services.auth_service import AuthService
from app.schemas import LoginSchema
import traceback

auth_bp = Blueprint('auth', __name__, url_prefix='/api/auth')

@auth_bp.route('/login', methods=['POST'])
def login():
    auth_service = AuthService()
    
    try:
        data = request.get_json()
        
        schema = LoginSchema()
        errors = schema.validate(data)
        if errors:
            return jsonify(errors), 400

        usuario = data.get('usuario')
        senha = data.get('senha')
        result = auth_service.login(usuario_login=usuario, senha_input=senha)
        
        return jsonify(result), 200

    except Exception as e:
        print("\n" + "="*50)
        print("ERRO NO LOGIN:")
        traceback.print_exc()
        print("="*50 + "\n")
        return jsonify({'message': 'Erro interno no servidor', 'error': str(e)}), 500