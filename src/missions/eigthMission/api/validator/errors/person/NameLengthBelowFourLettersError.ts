class NameLengthBelowFourLettersError extends Error {
  readonly status: number
  constructor () {
    super()
    super.name = 'Nome abaixo de quatro letras'
    super.message = 'Não é possivel cadastrar um nome com a quantidade de caracteres abaixo de quatro letras'
    this.status = 400
  }
}

export default NameLengthBelowFourLettersError
