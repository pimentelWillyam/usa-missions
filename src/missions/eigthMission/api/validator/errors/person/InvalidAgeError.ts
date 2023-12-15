/* eslint-disable @typescript-eslint/no-useless-constructor */
class InvalidAgeError extends Error {
  readonly status: number
  constructor () {
    super()
    super.name = 'Idade inválida'
    super.message = 'Não é possivel cadastrar uma idade inválida, para uma idade ser válida precisa estar entre 18 e 65'
    this.status = 400
  }
}

