import { Router } from "express";
import * as rolePermissionController from "../controllers/rolePermissionController";
import validateSchema from "../middlewares/validateSchema";
import rolePermissionSchema from "../schemas/rolePermissionSchema";

const rolePermissionRoute = Router();

rolePermissionRoute.post(
  "/role-permission",
  validateSchema(rolePermissionSchema),
  rolePermissionController.createRolePermission
);

export default rolePermissionRoute;
