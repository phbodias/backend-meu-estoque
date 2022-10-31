import { Request, Response } from "express";
import {
  IPermissionsForRole,
  IRolePermissionData,
} from "../types/rolePermissionTypes";
import * as rolePermissionServices from "../services/rolePermissionServices";
import { RoleNames, Role_permissions } from "@prisma/client";

const createRolePermission = async (req: Request, res: Response) => {
  const data: IRolePermissionData = req.body;
  const rolePermission: Role_permissions = await rolePermissionServices.create(
    data
  );

  return res.status(201).send(rolePermission);
};

const findPermissionsForRole = async (req: Request, res: Response) => {
  const role: RoleNames = req.body.name;
  const permissions: IPermissionsForRole =
    await rolePermissionServices.findPermissionsForRole(role);
  return res.status(200).send(permissions);
};

export { createRolePermission, findPermissionsForRole };
