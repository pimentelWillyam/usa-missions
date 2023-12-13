import type Person from '../entity/Person'
import type { IMemoryDataSource } from './IMemoryDataSource'

interface IPersonRepository {
  readonly dataSource: IMemoryDataSource

  create: (name: string, email: string, age: number) => Person
  getAll: () => Person[]
}

export default IPersonRepository
