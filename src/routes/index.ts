import { Router } from "express";
import errorHandler from "../middlewares/errorHandler";
import authRoute from "./authRoute";

const route = Router();

route.use(authRoute);
route.use(errorHandler);

export default route;
