class AppError(Exception):
    
    def __init__(self, message, status_code=400, payload=None):
        super().__init__()
        self.message = message
        self.status_code = status_code
        self.payload = payload

    def to_dict(self):
        rv = dict(self.payload or ())
        rv['error'] = True
        rv['message'] = self.message
        return rv

class AuthenticationError(AppError):
    def __init__(self, message="Falha na autenticação"):
        super().__init__(message, status_code=401)

class NotFoundError(AppError):
    def __init__(self, message="Recurso não encontrado"):
        super().__init__(message, status_code=404)

class ValidationError(AppError):
    def __init__(self, message="Dados inválidos"):
        super().__init__(message, status_code=400)