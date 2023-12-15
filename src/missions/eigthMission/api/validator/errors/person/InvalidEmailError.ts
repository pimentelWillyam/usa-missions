/* eslint-disable @typescript-eslint/no-useless-constructor */
class InvalidEmailError extends Error {
  readonly status: number
  constructor () {
    super()
    super.name = 'Email inválido'
    super.message = 'Não é possivel cadastrar um email inválido, ele precisa seguir o formato exemplo@exemplo.exemplo'
    this.status = 400
  }
}

export default InvalidEmailError
