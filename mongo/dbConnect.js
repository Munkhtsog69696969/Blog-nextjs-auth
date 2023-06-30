import mongoose from "mongoose";

export const connectDb=async()=>{
    mongoose.set("strictQuery",true);

    try{
        await mongoose.connect(process.env.MONGO_DB_URI , {
            dbName:"Blog",
            useNewUrlParser:true,
            useUnifiedTopology:true,    
        })

        console.log("connected to MongoDb")
    }catch(err){
        console.log(err);
    }
}