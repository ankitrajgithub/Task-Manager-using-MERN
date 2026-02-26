const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    profileImage:{type:String,default:null},
    role:{type:String,enum:["admin","user"],default:"member"}
},{timestamps:true})