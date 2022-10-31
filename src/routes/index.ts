import { Router } from "express";
import "express-async-errors";
import errorHandler from "../middlewares/errorHandler";
import authRoute from "./authRoute";
import permissionsRoute from "./permissionsRoute";
import rolesRoute from "./rolesRoute";

const route = Router();

route.use(authRoute);
route.use(rolesRoute);
route.use(permissionsRoute);
route.use(errorHandler);

export default route;
