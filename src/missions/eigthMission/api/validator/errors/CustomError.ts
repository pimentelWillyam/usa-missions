class CustomError extends Error {
  status: number
  constructor (name: string, message: string, status: number) {
    super()
    this.name = name
    this.message = message
    this.status = status
  }
}

export default CustomError
