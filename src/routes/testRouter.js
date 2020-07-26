import Router from 'koa-router'
import { getData, setData } from '../controller/testController'
const router = new Router()

router.prefix('/public')
router.get('/getData', getData)
router.post('/setData', setData)

export default router