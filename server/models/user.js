import mongoose from "mongoose";

const schema=mongoose.Schema({
     userid:{
        type:String,
        required:true
       },
       password:{
            type:String,
            required:true
        },
})

export const User=mongoose.model("User",schema)