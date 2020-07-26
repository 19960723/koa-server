import Koa from 'Koa'
import path from 'path'
import koaBody from 'koa-body'
import statics from 'koa-static'
import cors from '@koa/cors'
import routes from './routes/routes'
import helmet from 'koa-helmet'
import jsonUtil from 'koa-json'
import JWT from 'koa-jwt'

import compose from 'koa-compose'
import compress from 'koa-compress'
import config from './config/index'
import errorHandle from './common/ErrorHandle'


const app = new Koa()

const isDevMode = process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod' ? false : true

const jwt = JWT({ secret: config.JWT_SECRET }).unless({ path: [/^\/public/] })
const middleware = compose([
  koaBody(),
  statics(path.relative(__dirname, '../public')),
  cors(),
  helmet(),
  jsonUtil({pretty:false, param:'pretty'}),
  errorHandle,
  jwt
])

if (!isDevMode) {
  app.use(compress(middleware))
}

app.use(middleware)
app.use(routes())

app.listen(3800, () => {
  console.log('http:localhost:3800 服务已开启')
})
