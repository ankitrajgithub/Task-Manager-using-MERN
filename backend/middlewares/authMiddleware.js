const jwt=require("jsonwebtoken");
const UserModel=require("../models/User");

const protect=async (req,res,next)=>{
    try{
        const token=req.headers.Authorization;
        if(token && token.startsWith['bearer']){
            token=token.split[" "][1];
            const decodedData=jwt.verify(token,process.env.JWT_SECRET);
            req.user=await UserModel.findById(decoded.id).select("-password");
            next();
        }else{
            res.status(401).json({
                msg:"Not authorized, No token"
            });
        }
    }catch(err){
        res.status(401).json({
            msg:"Token failed",
            error:err.message
        });
    }
}

const adminOnly=(req,res,next)=>{
    if(req.user && req.user.role==="admin"){
        next();
    }else{
        res.status(401).json({
            msg:"Access denied. Admin only access"
        })
    }
}

module.exports={
    protect,
    adminOnly
}