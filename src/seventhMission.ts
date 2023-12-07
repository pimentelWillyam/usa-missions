interface Person {
  name: string
  email: string
  age: number
}

const fullNameNormalizer = (rawFullName: string): string => {
  const splittedFullName = rawFullName.split(' ')
  let i; let j; let normalizedFullname = ''
  for (i = 0; i < splittedFullName.length; i++) {
    if (i !== 0) normalizedFullname += ' '
    for (j = 0; j < splittedFullName[i].length; j++) {
      if (j === 0) normalizedFullname += splittedFullName[i][j].toLocaleUpperCase()
      else normalizedFullname += splittedFullName[i][j].toLocaleLowerCase()
    }
  }
  return normalizedFullname
}

class Validator {
  nameIsLongEnough = (name: string): boolean => {
    if (name.length <= 3) throw new Error('O nome da pessoa precisa ter mais de três caracteres')
    return true
  }

  nameHasNoNumbers = (name: string): boolean => {
    for (const letter of name) {
      if (letter === '0' || letter === '1' || letter === '2' || letter === '3' || letter === '4' || letter === '5' || letter === '6' || letter === '7' || letter === '8' || letter === '9') throw new Error('O nome da pessoaa não deve conter números')
    }
    return true
  }

  isEmailValid = (email: string): boolean => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return true
    throw new Error('O fomato de email deve ser "email@email.email')
  }

  isAgeValid = (age: number): boolean => {
    if (age > 17 && age < 66) return true
    throw new Error('A idade deve ser entre 18 e 65 aos')
  }

  valueIsNullOrUndefined = (value: unknown): boolean => {
    if (value === null || value === undefined) throw new Error('Nenhum valor pode ser nulo ou indefinido')
    return false
  }
}

interface ILocalDatabase {
  insertPerson: (name: string, email: string, age: number) => void
  fetchPersonList: () => Person[]
}

class LocalDatabase implements ILocalDatabase {
  personList: Person[] = []
  constructor (private readonly validator: Validator) {}

  insertPerson = (name: string, email: string, age: number): void => {
    try {
      if (this.validator.nameIsLongEnough(name) && this.validator.nameHasNoNumbers(name) && this.validator.isEmailValid(email) && this.validator.isAgeValid(age) && !this.validator.valueIsNullOrUndefined(name) && !this.validator.valueIsNullOrUndefined(email) && !this.validator.valueIsNullOrUndefined(age)) { this.personList.push({ name: fullNameNormalizer(name), email, age }) }
    } catch (error) {
    }
  }

  fetchPersonList = (): Person[] => {
    return this.personList
  }
}

export { LocalDatabase, Validator }
