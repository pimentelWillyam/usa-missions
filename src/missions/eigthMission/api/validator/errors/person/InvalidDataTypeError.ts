import CustomError from '../CustomError'

class InvalidDataTypeError extends CustomError {
  constructor (attribute: string) {
    super('Tipo de dado inválido', `Não é possivel cadastrar um ${attribute} vazio, indefinido ou nulo`, 400)
  }
}

export default InvalidDataTypeError
