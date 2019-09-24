import 'reflect-metadata'

import * as Koa from 'koa'

import { useContainer, useKoaServer } from 'routing-controllers'

import { Environment } from './config/environments'

import * as json from 'koa-json'

import * as cors from 'koa2-cors'

import { Container } from 'typedi'

import { APIController } from './controllers/api.controller'

const logMiddleware = require('./middleware/requestLog')

useContainer(Container)

export const createHttpServer = () => {
  const koa = new Koa()

  koa.use(logMiddleware)

  if (Environment.identity !== 'production') koa.use(json())

  koa.use(cors())

  useKoaServer(koa, {
    routePrefix: '/api',
    controllers: [APIController],
    classTransformer: false,
    development: Environment.identity === 'development'
  })

  return koa
}