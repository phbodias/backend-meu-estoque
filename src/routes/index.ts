import { Router } from "express";
import "express-async-errors";
import errorHandler from "../middlewares/errorHandler";
import authRoute from "./authRoute";
import rolesRoute from "./rolesRoute";

const route = Router();

route.use(authRoute);
route.use(rolesRoute);
route.use(errorHandler);

export default route;
