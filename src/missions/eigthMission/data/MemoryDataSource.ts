import type Person from '../api/entity/Person'

class MemoryDataSource {
  private personList: Person[] = []

  readonly start = (): void => {
    this.createPersonTable()
  }

  readonly stop = (): void => {
    this.createPersonTable()
  }

  readonly createPersonTable = (): void => {
    this.personList = []
  }

  readonly dropPersonTable = (): void => {
    this.personList = []
  }

  insertPersonRegistry = (name: string, email: string, age: number): Person => {
    this.personList.push({ name, email, age })
    return { name, email, age }
  }

  fetchEveryPersonRegistry = (): Person[] => {
    return this.personList
  }
}

export default MemoryDataSource
