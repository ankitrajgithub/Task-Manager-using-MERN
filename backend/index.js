require("dotenv").config();
const express=require("express");
const cors=require("cors");
const path=require("path");
const PORT=process.env.PORT;
const {connectToDB}=require("./config/db");
const {authRoutes} =require("./routes/authRoutes");


const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    methods:["GET","POST","PUT","DELETE"],
    origin:process.env.CLIENT_URL,
    allowedHeaders:["Content-Type","Authorization"]
}));

app.use("api/auth",authRoutes);
// app.use("api/reports",reportRoutes);
// app.use("api/tasks",taskRoutes);
// app.use("api/users",userRoutes);

app.get("/",(req,res)=>{
    res.json({
        msg:"hllo"
    })
});

app.listen(PORT,()=>{
    connectToDB();
    console.log(`App listening on Port ${PORT}`);
});