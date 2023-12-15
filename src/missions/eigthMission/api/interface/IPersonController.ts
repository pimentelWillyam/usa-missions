import { type Request, type Response } from 'express'
import type IPersonValidator from './IPersonValidator'
import type IPersonService from './IPersonService'

interface IPersonController {
  readonly personService: IPersonService
  readonly personValidator: IPersonValidator

  create: (req: Request, res: Response) => Response<any, Record<string, any>>
  getAll: (res: Response) => Response<any, Record<string, any>>
}

export default IPersonController
