import { Request, Response } from "express";
import permissionData from "../types/permissionType";
import * as permissionsServices from "../services/permissionsServices";
import { Permissions } from "@prisma/client";

const createPermission = async (req: Request, res: Response) => {
  const data: permissionData = req.body;
  const permission: Permissions = await permissionsServices.createPermission(
    data
  );
  return res.status(201).send(permission);
};

export { createPermission };
