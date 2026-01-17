from flask import Blueprint, request, jsonify
from services.ator_service import AtorService
from errors import ValidationError

ator_bp = Blueprint('ator', __name__)

@ator_bp.route('/', methods=['GET'])
def get_atores():
    atores = AtorService.get_all()
    return jsonify(atores), 200

@ator_bp.route('/', methods=['POST'])
def create_ator():
    data = request.get_json()
    
    required_fields = ['nome', 'email', 'login', 'senha', 'unidade_id']
    if not all(field in data for field in required_fields):
        raise ValidationError("Campos obrigatórios: nome, email, login, senha, unidade_id")

    response = AtorService.create(data)
    return jsonify(response), 201