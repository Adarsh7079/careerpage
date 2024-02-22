import express from "express"
import {add,DeleteJob, getall, updateJob} from "../controller/job.js"
const router=express.Router();

router.get("/all",getall)
router.post("/new",add);
router.delete("/del/:id",DeleteJob);
router.patch("/update/:id",updateJob);

export default router;