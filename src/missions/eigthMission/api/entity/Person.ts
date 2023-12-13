import type IPerson from '../interface/IPerson'

class Person implements IPerson {
  constructor (name: string, email: string, age: number) {
    this.name = name
    this.email = email
    this.age = age
  }

  name!: string
  email!: string
  age!: number
}

export default Person
