import type Person from '../entity/Person'

interface IPersonService {
  create: (name: string, email: string, age: number) => Person
  getAll: () => Person[]
}

export default IPersonService
