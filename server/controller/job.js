import {Job} from "../models/job.js";

export const add=async(req,res)=>{
    try{
        const {img,Job_Title, company_name, Job_Link,degree,  Job_location,
            Job_Type,  passing_year}=req.body;
        const resp=new Job({img,Job_Title, company_name, Job_Link,degree,  Job_location,
            Job_Type,  passing_year});
        await resp.save();
        res.status(201).json({
                message:"Job added successfully",
            });
    }
    catch(error)
    {
        res.status(401).json({
            message: "Something went wrong",
            success: false,
            
        });
        console.log(error);
    }
};

export const DeleteJob=async(req,res,next)=>{
    try{
        const id=req.params.id;
        const respo=await Job.deleteOne({_id:id});
        res.json({
            success:true,
            
        });
    }catch(error)
    {
        res.status(401).json({
            message: "Something went wrong",
            success: false,
            
        });
        console.log(error);
    }
};

export const updateJob=async(req,res)=>{
    console.log("run gere ")
    try{
        const id=req.params.id;
        const updateJob=req.body;
       
        const updateData=await Job.updateOne({_id:id},
            {
                $set:updateJob
            })
            res.status(200).json("updated")
    }
    catch(error)
    {
        res.status(401).json({
            message: "Something went wrong",
            success: false,
            
        });
        console.log(error);
    }
};
export const getall=async(req,res,next)=>{
    try {
        const users =await Job.find({});
    
        const keyword =req.query.keyword;
        console.log(keyword);
    
        res.json({
            success:true,
            user:users,
        });
       } catch (error) {
        res.status(401).json({
            message: "Something went wrong",
            success: false,
            
        });
        console.log(error);
       }
}

