import express from "express";
import { signIn, signUp } from "../controllers/userController.js";

const authRouter = express.Router();

authRouter.post("/login", signIn);
authRouter.post("/register", signUp);

export default authRouter;
