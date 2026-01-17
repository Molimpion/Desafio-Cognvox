from marshmallow import Schema, fields, validate

class AtorSchema(Schema):
    id = fields.Int(dump_only=True)
    nome = fields.Str(required=True, validate=validate.Length(min=3))
    email = fields.Email(required=True)
    cpf = fields.Str()
    data_nascimento = fields.Date()
    telefone_cel = fields.Str()
    unidade_id = fields.Int(required=True)
    profissao_id = fields.Int(load_default=1)
    status_cod = fields.Int(load_default=1)
    
    login = fields.Str(load_only=True, required=True)
    senha = fields.Str(load_only=True, required=True)

class LoginSchema(Schema):
    usuario = fields.Str(required=True)
    senha = fields.Str(required=True)