import User from '../model/User'
// console.log(User)
export const getData = async (ctx, next) => {
  ctx.body = {
    name: '林小龙',
    age: 23,
    sex: '男',
    lfex: 'yoyo'
  }
}

export const setData = async (ctx, next) => {
  ctx.body = ctx.request.body
}

