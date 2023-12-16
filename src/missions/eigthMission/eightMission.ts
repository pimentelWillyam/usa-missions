import { Server } from 'http'

import App from './api/App'
import PersonController from './api/controller/PersonController'
import PersonRouter from './api/router/PersonRouter'
import PersonService from './api/service/PersonService'
import PersonValidator from './api/validator/PersonValidator'
import PersonRepository from './api/repository/PersonRepository'
import MemoryDataSource from './data/MemoryDataSource'
import Api from './helper/Api'

import * as express from 'express'

const memoryDataSource = new MemoryDataSource()
const personRepository = new PersonRepository(memoryDataSource)
const personService = new PersonService(personRepository)
const personController = new PersonController(personService, new PersonValidator())
const personRouter = new PersonRouter(personController)

const api = new Api(express(), personRouter)
const app = new App(api, new Server())

app.start()
