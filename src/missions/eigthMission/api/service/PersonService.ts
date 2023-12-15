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

  private readonly fullNameNormalizer = (rawFullName: string): string => {
    const splittedFullName = rawFullName.split(' ')
    let i; let j; let normalizedFullname = ''
    for (i = 0; i < splittedFullName.length; i++) {
      if (i !== 0) normalizedFullname += ' '
      for (j = 0; j < splittedFullName[i].length; j++) {
        if (j === 0) normalizedFullname += splittedFullName[i][j].toLocaleUpperCase()
        else normalizedFullname += splittedFullName[i][j].toLocaleLowerCase()
      }
    }
    return normalizedFullname
  }
}

export default PersonService
