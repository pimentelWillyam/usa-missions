import type IPerson from './IPerson'

interface IPersonService {
  create: (message: string) => Promise<IPerson>
  getAll: () => Promise<IPerson[]>
  get: (id: string) => Promise<IPerson | null>
}

export default IPersonService
