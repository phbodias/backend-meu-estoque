import joi from "joi";
import { Users } from "@prisma/client";

const signUpSchema = joi.object({
  name: joi.string().min(3).max(30).required,
  email: joi.string().email().required,
  password: joi.string().min(6).required,
  role: joi.string().valid("ONLY_READ", "SELLER", "MANAGER", "OWNER").required,
});

export default signUpSchema;
