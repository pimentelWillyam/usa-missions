// importando core da rota
import * as express from 'express'
import { type Router, type Request, type Response } from 'express'

// importando service da rota
import type IPersonController from '../interface/IPersonController'
import type IPersonRouter from '../interface/IPersonRouter'

// criando rotas

class PersonRouter implements IPersonRouter {
  readonly routes: Router
  constructor (readonly personController: IPersonController) {
    this.routes = express.Router()
    this.routes.post('/person', (req: Request, res: Response) => {
      void personController.create(req, res)
    })
    this.routes.get('/person', (req: Request, res: Response) => {
      void personController.getAll(res)
    })
  }
}

export default PersonRouter
