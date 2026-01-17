from flask import Blueprint, request, jsonify
from services.ator_service import AtorService
from schemas import AtorSchema
from marshmallow import ValidationError

ator_bp = Blueprint('ator', __name__)
service = AtorService()
schema = AtorSchema()
list_schema = AtorSchema(many=True)

@ator_bp.route('/', methods=['GET'])
def get_atores():
    atores = service.get_all()
    return jsonify(list_schema.dump(atores)), 200

@ator_bp.route('/<int:id>', methods=['GET'])
def get_ator(id):
    try:
        ator = service.get_by_id(id)
        return jsonify(schema.dump(ator)), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 404

@ator_bp.route('/', methods=['POST'])
def create_ator():
    try:
        data = schema.load(request.get_json())
        ator = service.create(data)
        return jsonify(schema.dump(ator)), 201
    except ValidationError as err:
        return jsonify(err.messages), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@ator_bp.route('/<int:id>', methods=['PUT'])
def update_ator(id):
    try:
        data = schema.load(request.get_json(), partial=True)
        ator = service.update(id, data)
        return jsonify(schema.dump(ator)), 200
    except ValidationError as err:
        return jsonify(err.messages), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 404

@ator_bp.route('/<int:id>', methods=['DELETE'])
def delete_ator(id):
    try:
        service.delete(id)
        return jsonify({"message": "Removido com sucesso"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 404