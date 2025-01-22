import express from "express";
import { signIn, signUp, user } from "../controllers/userController.js";

const authRouter = express.Router();

authRouter.post("/login", signIn);
authRouter.post("/register", signUp);
authRouter.get("/user/:id", user);

export default authRouter;
