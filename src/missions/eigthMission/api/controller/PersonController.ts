import { type Request, type Response } from 'express'

import type IPersonController from '../interface/IPersonController'
import type IPersonService from '../interface/IPersonService'
import type IPersonValidator from '../interface/IPersonValidator'

enum PersonErrorMessage {
  UNKNOWN = 'Unknown error during request',
  NOT_FOUND = 'The person could not be found',
}

class PersonController implements IPersonController {
  constructor (readonly personService: IPersonService, readonly personValidator: IPersonValidator) {}

  create (req: Request, res: Response): Response<any, Record<string, any>> {
    try {
      this.personValidator.validate(req.body.name, req.body.email, req.body.age)
      const person = this.personService.create(req.body.name, req.body.email, req.body.age)
      return res.status(200).json(person)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message)
      }
      return res.status(500).send(PersonErrorMessage.UNKNOWN)
    }
  }

  getAll (res: Response): Response<any, Record<string, any>> {
    try {
      const personList = this.personService.getAll()
      return res.status(200).json(personList)
    } catch (error) {
      return res.status(500).send(PersonErrorMessage.UNKNOWN)
    }
  }
}

export default PersonController
