import { Router } from "express";
import { signUp } from "../controllers/userControllers";
import validateSchema from "../middlewares/validateSchema";
import signUpSchema from "../schemas/signUpSchema";

const userRoute = Router();

userRoute.post("/sign-up", validateSchema(signUpSchema), signUp);

export default userRoute;
