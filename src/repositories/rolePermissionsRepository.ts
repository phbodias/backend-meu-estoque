import { Role_permissions } from "@prisma/client";
import prisma from "../databases/prisma";
import { rolePermissionType } from "../types/rolePermissionTypes";

const create = async (data: rolePermissionType): Promise<Role_permissions> => {
  return await prisma.role_permissions.create({ data });
};

const findByIds = async (data: rolePermissionType) => {
  return await prisma.role_permissions.findFirst({
    where: { roleId: data.roleId, permissionId: data.permissionId },
  });
};

export { create, findByIds };
