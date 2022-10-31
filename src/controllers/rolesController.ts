import { Request, Response } from "express";
import * as rolesServices from "../services/rolesServices";

const createRole = async (req: Request, res: Response) => {
  const { name } = req.body;
  const role = await rolesServices.createRole(name);
  return res.status(201).send(role);
};

export { createRole };
