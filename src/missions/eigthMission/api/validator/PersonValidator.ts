import type IPersonValidator from '../interface/IPersonValidator'

enum PersonErrorMessage {
  INVALID_MESSAGE = 'Invalid message',
}

class PersonValidator implements IPersonValidator {
  validate (message: string): void {
    if (message === '' || message == null) throw new Error(PersonErrorMessage.INVALID_MESSAGE)
  }
}

export default PersonValidator
