from flask import Blueprint, request, jsonify
from services.auth_service import AuthService
from errors import ValidationError

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/login', methods=['POST'])
def login():
    """
    Realiza o login do usuário
    ---
    tags:
      - Autenticação
    parameters:
      - in: body
        name: body
        required: true
        schema:
          type: object
          required:
            - usuario
            - senha
          properties:
            usuario:
              type: string
              example: admin
            senha:
              type: string
              example: 123456
    responses:
      200:
        description: Login realizado com sucesso
      401:
        description: Credenciais inválidas
    """
    data = request.get_json()
    
    if not data or not data.get('usuario') or not data.get('senha'):
        raise ValidationError("Os campos 'usuario' e 'senha' são obrigatórios")

    response_data = AuthService.login(data.get('usuario'), data.get('senha'))
    
    return jsonify({
        "success": True,
        "message": "Login realizado com sucesso",
        "data": response_data
    }), 200