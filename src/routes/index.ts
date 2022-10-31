import { Router } from "express";
import "express-async-errors";
import errorHandler from "../middlewares/errorHandler";
import authRoute from "./authRoute";
import permissionsRoute from "./permissionsRoute";
import rolePermissionRoute from "./rolePermissionRoute";
import rolesRoute from "./rolesRoute";

const route = Router();

route.use(authRoute);
route.use(rolesRoute);
route.use(permissionsRoute);
route.use(rolePermissionRoute);
route.use(errorHandler);

export default route;
