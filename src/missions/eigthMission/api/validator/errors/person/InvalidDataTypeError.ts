class InvalidDataTypeError extends Error {
  readonly status: number
  constructor (attribute: string) {
    super()
    super.name = 'Tipo de dado inválido'
    super.message = `Não é possivel cadastrar um ${attribute} vazio, indefinido ou nulo`
    this.status = 400
  }
}

export default InvalidDataTypeError
