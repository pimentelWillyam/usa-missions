import CustomError from '../CustomError'

class InvalidEmailError extends CustomError {
  constructor () {
    super('Email inválido', 'Não é possivel cadastrar um email inválido, ele precisa seguir o formato exemplo@exemplo.exemplo', 400)
  }
}

export default InvalidEmailError
