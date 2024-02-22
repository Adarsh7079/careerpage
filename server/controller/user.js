import {User} from "../models/user.js";

export const login = async(req,res)=>{
    try{
        const { userid,password}=req.body;
        if(!userid || !password)
        {
            return res.status(400).json({error:"Please fill the data "})
        }
         if(userid==="try" && password==="123")
         {
            res.json({message:"user login successfully "})
         }
         else
         {
            res.status(401).json({
                message:"werong credientail",
                success:false,
            })
         }

    }
    catch(error)
    {
            res.status(401).json({
                message:"werong credientail",
                success:false,
            })
            console.log(error)
    }
}