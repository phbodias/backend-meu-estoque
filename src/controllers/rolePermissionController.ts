import { Request, Response } from "express";
import { rolePermissionData } from "../types/rolePermissionTypes";
import * as rolePermissionServices from "../services/rolePermissionServices";
import { Role_permissions } from "@prisma/client";

const createRolePermission = async (req: Request, res: Response) => {
  const data: rolePermissionData = req.body;
  const rolePermission: Role_permissions = await rolePermissionServices.create(
    data
  );

  return res.status(201).send(rolePermission);
};

export { createRolePermission };
