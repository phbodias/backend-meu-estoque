import { Request, Response } from "express";
import * as rolesServices from "../services/rolesServices";

const createRole = (req: Request, res: Response) => {
  const { name } = req.body;
  const role = rolesServices.createRole(name);
  return res.status(201).send(role);
};

export { createRole };
