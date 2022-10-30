import { Router } from "express";
import { signUp } from "../controllers/authControllers";
import validateSchema from "../middlewares/validateSchema";
import signUpSchema from "../schemas/signUpSchema";

const authRoute = Router();

authRoute.post("/sign-up", validateSchema(signUpSchema), signUp);

export default authRoute;
