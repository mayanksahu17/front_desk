
import mongoose from "mongoose";
import { DB_NAME } from "../constant";

const connectdb  = async ()=>{
    try {
     const connectionInstance = await  mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
     console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`);
     
    } catch (error : any) {
       
        console.log("Mongodb connection error: " + error);
        throw error;
        process.exit(1);
    }
}

export default connectdb