import type IPerson from '../interface/IPerson'

class Person implements IPerson {
  constructor (id: string, date: string, message: string) {
    this.id = id
    this.date = date
    this.message = message
  }

  id!: string
  date!: string
  message!: string
}

export default Person
