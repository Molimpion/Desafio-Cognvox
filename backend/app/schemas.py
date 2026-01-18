from marshmallow import Schema, fields, validate

class AtorSchema(Schema):
    id = fields.Int(dump_only=True)
    nome = fields.Str(required=True, validate=validate.Length(min=3))
    email = fields.Email(required=True)
    cpf = fields.Str(load_default=None)
    data_nascimento = fields.Date(allow_none=True)
    ano_sessao = fields.Str(load_default=None)
    data_inicio_intervencao = fields.Date(allow_none=True)
    idioma_id = fields.Int(load_default=None)
    endereco = fields.Str(load_default=None)
    cidade = fields.Str(load_default=None)
    estado = fields.Str(load_default=None)
    pais = fields.Str(load_default=None)
    modalidade_ensino_id = fields.Int(load_default=None)
    telefone_cel = fields.Str(load_default=None)
    unidade_id = fields.Int(required=True)
    profissao_id = fields.Int(load_default=1)
    status_cod = fields.Int(load_default=1)
    login = fields.Str(load_only=True, required=True)
    senha = fields.Str(load_only=True, required=True)
    grupo_usuario = fields.Int(load_only=True, load_default=1)

class LoginSchema(Schema):
    usuario = fields.Str(required=True)
    senha = fields.Str(required=True)