import { type Request, type Response } from 'express'

import type IPersonController from '../interface/IPersonController'
import type IPersonService from '../interface/IPersonService'
import type IPersonValidator from '../interface/IPersonValidator'
import KnownError from '../validator/errors/KnownError'

class PersonController implements IPersonController {
  constructor (readonly personService: IPersonService, readonly personValidator: IPersonValidator) {}

  create (req: Request, res: Response): Response<any, Record<string, any>> {
    try {
      this.personValidator.validate(req.body.name, req.body.email, req.body.age)
      const person = this.personService.create(req.body.name, req.body.email, req.body.age)
      return res.status(201).json(person)
    } catch (error) {
      if (error instanceof KnownError) {
        return res.status(error.status).send({ name: error.name, message: error.message })
      }
      return res.status(500).send({ name: 'Erro desconhecido', message: 'Um erro inesperado aconteceu durante a requisição' })
    }
  }

  getAll (res: Response): Response<any, Record<string, any>> {
    try {
      const personList = this.personService.getAll()
      return res.status(200).json(personList)
    } catch (error) {
      if (error instanceof KnownError) {
        return res.status(error.status).send({ name: error.name, message: error.message })
      }
      return res.status(500).send({ name: 'Erro desconhecido', message: 'Um erro inesperado aconteceu durante a requisição' })
    }
  }
}

export default PersonController
