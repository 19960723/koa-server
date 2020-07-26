import mongoose from '../db/DBHelpler'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  username:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  avatar:{
    type:String
  },
  date:{
    type:Date,
    default: Date.now
  }
})

const UserModel = mongoose.model('users', UserSchema)
export default UserModel
