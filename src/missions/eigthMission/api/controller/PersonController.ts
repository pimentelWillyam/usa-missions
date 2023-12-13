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

  async create (req: Request, res: Response): Promise<Response<any, Record<string, any>>> {
    try {
      this.personValidator.validate(req.body.message)
      const person = await this.personService.create(req.body.message)
      return res.status(200).json(person)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message)
      }
      return res.status(500).send(PersonErrorMessage.UNKNOWN)
    }
  }

  async getAll (res: Response): Promise<Response<any, Record<string, any>>> {
    try {
      const personList = await this.personService.getAll()
      return res.status(200).json(personList)
    } catch (error) {
      return res.status(500).send(PersonErrorMessage.UNKNOWN)
    }
  }

  async get (req: Request, res: Response): Promise<Response<any, Record<string, any>>> {
    try {
      const person = await this.personService.get(req.params.id)
      if (person != null) {
        return res.status(200).json(person)
      } else {
        return res.status(404).send(PersonErrorMessage.NOT_FOUND)
      }
    } catch (error) {
      return res.status(500).send(PersonErrorMessage.UNKNOWN)
    }
  }
}

export default PersonController
