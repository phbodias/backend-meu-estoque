import { Router } from "express";
import * as rolesController from "../controllers/rolesController";
import validateSchema from "../middlewares/validateSchema";
import roleSchema from "../schemas/roleSchema";

const rolesRoute = Router();

rolesRoute.post(
  "/add-role",
  validateSchema(roleSchema),
  rolesController.createRole
);

export default rolesRoute;
