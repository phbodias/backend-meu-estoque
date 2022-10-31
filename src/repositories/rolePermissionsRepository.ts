import { Role_permissions } from "@prisma/client";
import prisma from "../databases/prisma";
import { TRolePermissionType } from "../types/rolePermissionTypes";

const create = async (data: TRolePermissionType): Promise<Role_permissions> => {
  return await prisma.role_permissions.create({ data });
};

const findByIds = async (
  data: TRolePermissionType
): Promise<Role_permissions> => {
  return await prisma.role_permissions.findFirst({
    where: { roleId: data.roleId, permissionId: data.permissionId },
  });
};

const findPermissionsForRole = async (roleId: string) => {
  return await prisma.role_permissions.findMany({
    select: {
      Permission: {
        select: {
          name: true,
        },
      },
    },
    where: { roleId },
  });
};

export { create, findByIds, findPermissionsForRole };
