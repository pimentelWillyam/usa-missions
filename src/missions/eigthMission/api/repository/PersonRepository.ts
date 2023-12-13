import type IPersonRepository from '../interface/IPersonRepository'
import type { IMemoryDataSource } from '../interface/IMemoryDataSource'
import type Person from '../entity/Person'

class PersonRepository implements IPersonRepository {
  constructor (readonly dataSource: IMemoryDataSource) {}

  create (name: string, email: string, age: number): Person {
    this.dataSource.insertPersonRegistry(name, email, age)
    return { name, email, age }
  }

  getAll (): Person[] {
    return this.dataSource.fetchEveryPersonRegistry()
  }
}

export default PersonRepository
