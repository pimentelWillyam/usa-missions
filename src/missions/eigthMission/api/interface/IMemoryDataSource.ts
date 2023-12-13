import type Person from '../entity/Person'

export interface IMemoryDataSource {
  start: () => void
  createPersonTable: () => void
  insertPersonRegistry: (name: string, email: string, age: number) => Person
  fetchEveryPersonRegistry: () => Person[]
}
