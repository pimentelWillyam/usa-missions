import type IPersonValidator from '../interface/IPersonValidator'
import InvalidDataTypeError from './errors/person/InvalidDataTypeError'
import InvalidEmailError from './errors/person/InvalidEmailError'
import NameHasAnyNumberError from './errors/person/NameHasAnyNumberError'
import NameLengthBelowFourLettersError from './errors/person/NameLengthBelowFourLettersError'

class PersonValidator implements IPersonValidator {
  validate (name: string, email: string, age: number): void {
    if (!this.nameIsLongEnough(name)) throw new NameLengthBelowFourLettersError()
    if (!this.nameHasNoNumbers(name)) throw new NameHasAnyNumberError()
    if (!this.isEmailValid(email)) throw new InvalidEmailError()
    if (!this.isAgeValid(age)) throw new InvalidEmailError()
    if (this.valueIsNullOrUndefined('name')) throw new InvalidDataTypeError('nome')
    if (this.valueIsNullOrUndefined('email')) throw new InvalidDataTypeError('email')
    if (this.valueIsNullOrUndefined('age')) throw new InvalidDataTypeError('idade')
  }

  private readonly nameIsLongEnough = (name: string): boolean => {
    if (name.length <= 3) throw new Error('O nome da pessoa precisa ter mais de três caracteres')
    return true
  }

  private readonly nameHasNoNumbers = (name: string): boolean => {
    for (const letter of name) {
      if (letter === '0' || letter === '1' || letter === '2' || letter === '3' || letter === '4' || letter === '5' || letter === '6' || letter === '7' || letter === '8' || letter === '9') throw new Error('O nome da pessoaa não deve conter números')
    }
    return true
  }

  private readonly isEmailValid = (email: string): boolean => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return true
    throw new Error('O fomato de email deve ser "email@email.email')
  }

  private readonly isAgeValid = (age: number): boolean => {
    if (age > 17 && age < 66) return true
    throw new Error('A idade deve ser entre 18 e 65 aos')
  }

  private readonly valueIsNullOrUndefined = (value: unknown): boolean => {
    if (value === null || value === undefined) throw new Error('Nenhum valor pode ser nulo ou indefinido')
    return false
  }
}

export default PersonValidator
