import type Person from '../entity/Person'
import type IPersonRepository from '../interface/IPersonRepository'
import type IPersonService from '../interface/IPersonService'

class PersonService implements IPersonService {
  constructor (readonly PersonRepository: IPersonRepository) {}

  create (name: string, email: string, age: number): Person {
    return this.PersonRepository.create(this.fullNameNormalizer(name), email, age)
  }

  getAll (): Person[] {
    return this.PersonRepository.getAll()
  }
}

export default PersonService
