import { PermissionName, Permissions } from "@prisma/client";
import prisma from "../databases/prisma";
import permissionData from "../types/permissionType";

const create = async (data: permissionData): Promise<Permissions> => {
  return await prisma.permissions.create({ data });
};

const findByName = async (name: PermissionName): Promise<Permissions> => {
  return await prisma.permissions.findFirst({ where: { name } });
};

export { create, findByName };
