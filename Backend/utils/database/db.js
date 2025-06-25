import mongoose from "mongoose";
import  "dotenv/config";
const DB= process.env.DB;



const db= async()=>{
    try {
        const connect= await mongoose.connect(DB)
        if(connect){
            console.log(" db is connected ")
        }else{
            console.log("DB is not connected")
        }
    } catch (error) {
         console.log("Mongoose error ", error)
    }
}
export default db;