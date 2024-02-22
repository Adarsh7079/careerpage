import mongoose from "mongoose";

const schema=mongoose.Schema({
    img:{
        type:String,
        required:true
       },
      Job_Title:{
        type:String,
        required:true
       },
      company_name:{
        type:String,
        required:true
       },
       Job_Link:{
        type:String,
        required:true
       },
       degree:{
            type:String,
            required:true
        },
       Job_location:{
        type:String,
        required:true
       },
       Job_Type:{
        type:String,
        required:true
       },
        passing_year:{
           
                type:Number,
                required:true
            },
        viewcount: { 
            type: Number, 
            default: 0
        },
     
})

export const Job=mongoose.model("Job",schema)