import CustomError from '../CustomError'

class NameHasAnyNumberError extends CustomError {
  constructor () {
    super('Nome possui algum número', 'Não é possivel cadastrar um nome que contenha números', 400)
  }
}

export default NameHasAnyNumberError
