import { Router } from "express";
import * as rolePermissionController from "../controllers/rolePermissionController";
import validateSchema from "../middlewares/validateSchema";
import rolePermissionSchema from "../schemas/rolePermissionSchema";
import roleSchema from "../schemas/roleSchema";

const rolePermissionRoute = Router();

rolePermissionRoute.post(
  "/role-permission",
  validateSchema(rolePermissionSchema),
  rolePermissionController.createRolePermission
);

rolePermissionRoute.get(
  "/permissions-for-role",
  validateSchema(roleSchema),
  rolePermissionController.findPermissionsForRole
);

export default rolePermissionRoute;
