import type IDateManager from '../interface/IDateManager'
import type IPersonRepository from '../interface/IPersonRepository'
import type IPerson from '../interface/IPerson'
import type IPersonService from '../interface/IPersonService'

class PersonService implements IPersonService {
  constructor (readonly PersonRepository: IPersonRepository, readonly dateManager: IDateManager) {}

  async create (message: string): Promise<IPerson> {
    return await this.PersonRepository.create(this.uuidGenerator.generate(), message, this.dateManager.getCurrentDateTime())
  }

  async getAll (): Promise<IPerson[]> {
    return await this.PersonRepository.getAll()
  }

  async get (id: string): Promise<IPerson | null> {
    return await this.PersonRepository.get(id)
  }
}

export default PersonService
