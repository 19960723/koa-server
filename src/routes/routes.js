import combineRouters from 'koa-combine-routers'

import testRouter from './testRouter'

const router = combineRouters(
  testRouter
)

export default router
