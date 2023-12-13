import type IPerson from './IPerson'
import type IOracledbDataSource from './IOracledbDataSource'

interface IPersonRepository {
  readonly dataSource: IOracledbDataSource

  create: (id: string, message: string, date: string) => Promise<IPerson>
  getAll: () => Promise<IPerson[]>
  get: (id: string) => Promise<IPerson | null>
}

export default IPersonRepository
