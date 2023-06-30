import { Schema , model , models , Types } from "mongoose";

const userSchema=new Schema({
    email:{
        type:String,
        unique:[true,"Email already exists"],
        required:[true,"Email is required"],
    },
    username:{
        type:String,
        required:[true,"Username is required"],
    },
    imageUrl:{
        type:String,
        required:true,
    },
    providerId:{
        type:String,
        required:true,
    }
});

const User=models.User || model("User",userSchema);

export default User;

