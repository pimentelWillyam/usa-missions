import App from './api/App'
import PersonController from './api/controller/PersonController'
import PersonRouter from './api/router/PersonRouter'
import PersonService from './api/service/PersonService'
import PersonRepository from './api/repository/PersonRepository'
import MemoryDataSource from './data/MemoryDataSource'
import Api from './helper/Api'

import * as express from 'express'

const apiMiddleare = new ApiMiddleware()

const memoryDataSource = new MemoryDataSource()
const personRepository = new PersonRepository(memoryDataSource)
const personService = new PersonService(memoryDataSource)
const personController = new PersonController(personService)
const personRouter = new PersonRouter(personController)

const api = new Api(express(), apiMiddleware, personRouter)
const app = new App(new Api(),)

app.listen(process.env.PORTA, () => {
  console.log(`aplicação iniciada na porta ${process.env.PORTA}`)
})
