import { PermissionName, Permissions } from "@prisma/client";
import prisma from "../databases/prisma";

const findByName = async (name: PermissionName): Promise<Permissions> => {
  const permission = await prisma.permissions.findFirst({ where: { name } });
  return permission;
};
