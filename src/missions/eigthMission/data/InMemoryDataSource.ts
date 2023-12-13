class MemoryDataSource {
  private personList: Person[] = []

  constructor (private readonly personFactory: PersonFactory) {}

  readonly start = (): void => {
    this.createPersonTable()
  }

  private readonly createPersonTable = (): void => {
    this.personList = []
  }

  insertPersonRegistry = (masterId: string, name: string, fatherProfession: Profession, youthProfession: Profession, armor: Armor, bareHand: Weapon, attributes: Attributes): Person => {
    const person = this.personFactory.create(masterId, name, fatherProfession, youthProfession, attributes)
    this.personList.push(person)
    return person
  }

  fetchEveryPersonRegistry = (): Person[] => {
    return this.personList
  }

  fetchPersonByName = (name: string): Person | null => {
    for (let i = 0; i < this.personList.length; i++) {
      if (this.personList[i].name === name) return this.personList[i]
    }
    return null
  }

  updatePersonByName = (name: string, updatedPerson: Person): Person => {
    for (let i = 0; i < this.personList.length; i++) {
      if (this.personList[i].name === name) {
        // if (contentToUpdate.currentAttributes !== undefined) this.personList[i].currentAttributes = contentToUpdate.currentAttributes
        // if (contentToUpdate.currentWeapon !== undefined) this.personList[i].currentWeapon = contentToUpdate.currentWeapon
        // if (contentToUpdate.armor !== undefined) this.personList[i].armor = contentToUpdate.armor
        // if (contentToUpdate.currentAttributes !== undefined) this.personList[i].currentAttributes = contentToUpdate.currentAttributes
        // if (contentToUpdate.maximumAttributes !== undefined) this.personList[i].maximumAttributes = contentToUpdate.maximumAttributes
        // if (contentToUpdate.maestry !== undefined) this.personList[i].maestry = contentToUpdate.maestry
        this.personList[i] = updatedPerson
        return this.personList[i]
      }
    }
    throw new Error('Servo não encontrado')
  }

  deletePersonByName = (name: string): Person => {
    for (let i = 0; i < this.personList.length; i++) {
      if (this.personList[i].name === name) {
        const deletedServer = this.personList[i]
        this.personList.splice(i, 1)
        return deletedServer
      }
    }
    throw new Error('Servo não encontrado')
  }
}

export default MemoryDataSource