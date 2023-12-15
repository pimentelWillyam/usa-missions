class NameHasAnyNumberError extends Error {
  readonly status: number
  constructor () {
    super()
    super.name = 'Nome possui algum número'
    super.message = 'Não é possivel cadastrar um nome que contenha números'
    this.status = 400
  }
}

export default NameHasAnyNumberError
