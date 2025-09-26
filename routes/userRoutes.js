import express from "express";
import { getAllUsers, handleSignin, handleSignup } from "../controllers/user/userController.js"; 
import userAuthMiddleware from "../middleware/userAuthMiddleware.js";

const router = express.Router();

router.post("/signup", handleSignup);   

router.get("/get-all-users",userAuthMiddleware, getAllUsers);   
router.post("/signin", handleSignin);   

export default router;