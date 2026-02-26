const mongoose=require("mongoose");
const {setServers}= require("node:dns/promises");
setServers(["1.1.1.1", "8.8.8.8"]);


const connectToDB=async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected successfully");
    }catch(err){
        throw new Error("Coulnt conec");
    }
}

module.exports = {
    connectToDB
}