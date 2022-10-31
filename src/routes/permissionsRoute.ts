import { Router } from "express";
import validateSchema from "../middlewares/validateSchema";
import permissionSchema from "../schemas/permissionSchema";
import * as permissionsController from "../controllers/permissionsController";

const permissionsRoute = Router();

permissionsRoute.post(
  "/add-permission",
  validateSchema(permissionSchema),
  permissionsController.createPermission
);

export default permissionsRoute;
