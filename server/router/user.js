import express from "express"
import {login} from "../controller/user.js"
const router=express.Router();

router.post("/login",login)


export default router;