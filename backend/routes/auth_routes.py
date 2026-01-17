from flask import Blueprint, request, jsonify
from services.auth_service import AuthService
from errors import ValidationError

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    
    if not data or not data.get('usuario') or not data.get('senha'):
        raise ValidationError("Os campos 'usuario' e 'senha' são obrigatórios")

    response_data = AuthService.login(data.get('usuario'), data.get('senha'))
    
    return jsonify({
        "success": True,
        "message": "Login realizado com sucesso",
        "data": response_data
    }), 200