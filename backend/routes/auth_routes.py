from flask import Blueprint, request, jsonify
from services.auth_service import AuthService
from schemas import LoginSchema
from marshmallow import ValidationError

auth_bp = Blueprint('auth', __name__)
service = AuthService()
schema = LoginSchema()

@auth_bp.route('/login', methods=['POST'])
def login():
    try:
        data = schema.load(request.get_json())
        response = service.login(data)
        return jsonify(response), 200
        
    except ValidationError as err:
        return jsonify(err.messages), 400
    except Exception as e:
        status_code = 401 if "inválidos" in str(e) else 500
        return jsonify({"error": str(e)}), status_code