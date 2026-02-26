const UserModel=require("../models/User");
const bcrypt=require("bcypt");
const jwt=require("jsonwebtoken");

const generateToken=(userId)=>{
    return jwt.sign({id:userId},process.env.JWT_SECRET,{expiresIn:"7d"})
}

const registerUser=async (req,res)=>{
    try{
        const {name,email,password,profileImageUrl,adminInviteToken}=req.body;
        const userExists=await UserModel.findOne({email});
        if(userExists){
            res.status(400).json({
                msg:"User already exists"
            })
        }

    }catch(err){
        res.status(500).json({
            msg:"Internal server error",
            error:err.message
        })
    }
}

const loginUser=async (req,res)=>{
    try{
        
    }catch(err){
        res.status(500).json({
            msg:"Internal server error",
            error:err.message
        })
    }

}

const getUserProfile=async (req,res)=>{
    try{
        
    }catch(err){
        res.status(500).json({
            msg:"Internal server error",
            error:err.message
        })
    }

}

const updateUserProfile=async (req,res)=>{
    try{
        
    }catch(err){
        res.status(500).json({
            msg:"Internal server error",
            error:err.message
        })
    }

}

module.exports={
    registerUser,
    loginUser,
    getUserProfile,
    updateUserProfile
}