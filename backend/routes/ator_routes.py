from flask import Blueprint, request, jsonify
from services.ator_service import AtorService
from errors import ValidationError

ator_bp = Blueprint('ator', __name__)

@ator_bp.route('/', methods=['GET'])
def get_atores():
    """
    Lista todos os Atores cadastrados
    ---
    tags:
      - Atores
    responses:
      200:
        description: Lista de atores
    """
    atores = AtorService.get_all()
    return jsonify(atores), 200

@ator_bp.route('/<int:id>', methods=['GET'])
def get_ator_by_id(id):
    """
    Busca um Ator pelo ID
    ---
    tags:
      - Atores
    parameters:
      - name: id
        in: path
        type: integer
        required: true
    responses:
      200:
        description: Dados do Ator
      404:
        description: Ator não encontrado
    """
    ator = AtorService.get_by_id(id)
    return jsonify(ator.to_dict()), 200

@ator_bp.route('/', methods=['POST'])
def create_ator():
    """
    Cria um novo Ator e seu Usuário vinculado
    ---
    tags:
      - Atores
    parameters:
      - in: body
        name: body
        required: true
        schema:
          type: object
          required:
            - nome
            - email
            - login
            - senha
            - unidade_id
          properties:
            nome:
              type: string
            email:
              type: string
            login:
              type: string
            senha:
              type: string
            unidade_id:
              type: integer
            telefone:
              type: string
            cpf:
              type: string
    responses:
      201:
        description: Ator criado com sucesso
    """
    data = request.get_json()
    
    required_fields = ['nome', 'email', 'login', 'senha', 'unidade_id']
    if not all(field in data for field in required_fields):
        raise ValidationError("Campos obrigatórios: nome, email, login, senha, unidade_id")

    response = AtorService.create(data)
    return jsonify(response), 201

@ator_bp.route('/<int:id>', methods=['PUT'])
def update_ator(id):
    """
    Atualiza dados de um Ator
    ---
    tags:
      - Atores
    parameters:
      - name: id
        in: path
        type: integer
        required: true
      - in: body
        name: body
        schema:
          type: object
          properties:
            nome:
              type: string
            email:
              type: string
            telefone:
              type: string
    responses:
      200:
        description: Ator atualizado
    """
    data = request.get_json()
    response = AtorService.update(id, data)
    return jsonify(response), 200

@ator_bp.route('/<int:id>', methods=['DELETE'])
def delete_ator(id):
    """
    Remove um Ator e seu Usuário vinculado
    ---
    tags:
      - Atores
    parameters:
      - name: id
        in: path
        type: integer
        required: true
    responses:
      200:
        description: Removido com sucesso
    """
    response = AtorService.delete(id)
    return jsonify(response), 200