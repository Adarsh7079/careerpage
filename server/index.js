import express from "express";
import { config } from "dotenv";
import { connectDB } from "./DB/db.js";
import Job from "./router/job.js";
import cors from "cors";
import user from "./router/user.js"

const app=express();


config({
    path:"./config.env"
});

connectDB()

app.use(express.json());
app.use(
    cors({
      origin: [process.env.FRONTEND_URL],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );

app.use("/app/v1/job",Job);
app.use("/app/v1/user",user);

app.get("/",(req,res)=>{
    res.send("hello dear");
})

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`app is running on port no ${PORT}`)
})