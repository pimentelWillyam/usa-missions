import type IOracledbDataSource from '../interface/IOracledbDataSource'
import type IPersonRepository from '../interface/IPersonRepository'
import type IDateManager from '../interface/IDateManager'
import type IPerson from '../interface/IPerson'

class PersonRepository implements IPersonRepository {
  constructor (readonly dataSource: IOracledbDataSource, readonly uuidGenerator: IUuidGenerator, readonly dateManager: IDateManager) {}

  async create (id: string, message: string, date: string): Promise<IPerson> {
    const person = { id, date, message }
    await this.dataSource.insertPersonRegistry(id, message, date)
    return person
  }

  async getAll (): Promise<IPerson[]> {
    return await this.dataSource.getEveryPersonRegistry()
  }

  async get (id: string): Promise<IPerson | null> {
    const personList = await this.dataSource.getPersonBy('id', id)
    const person = personList
    if (person == null) {
      return null
    }
    return person
  }
}

export default PersonRepository
