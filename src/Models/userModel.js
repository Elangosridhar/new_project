import mongoose from "mongoose";
import db from "../db/db.js";
const usersSchema = mongoose.Schema({
    name:String,
    email:String,
    phonenumer:Number,
    role:String,
    password:String,

},{timestamps:true})

export  const User = db.model('users',usersSchema)