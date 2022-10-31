import * as rolePermissionRepository from "../repositories/rolePermissionsRepository";
import * as rolesRepository from "../repositories/rolesRepository";
import * as permissionsRepository from "../repositories/permissionsRepository";
import {
  rolePermissionData,
  rolePermissionType,
} from "../types/rolePermissionTypes";
import { Role_permissions } from "@prisma/client";

const create = async (data: rolePermissionData): Promise<Role_permissions> => {
  const role = await rolesRepository.findByName(data.role);
  const permission = await permissionsRepository.findByName(data.permission);

  if (!role || !permission) {
    throw { code: "Not found", message: "Role or permission does not exist." };
  }

  const roleId: string = role.id;
  const permissionId: string = permission.id;

  const alreadyExists: Role_permissions = await findByIds({
    roleId,
    permissionId,
  });
  if (alreadyExists) {
    throw { code: "Conflict", message: "Role already has this permission." };
  }

  return await rolePermissionRepository.create({ roleId, permissionId });
};

const findByIds = async (
  data: rolePermissionType
): Promise<Role_permissions> => {
  return await rolePermissionRepository.findByIds(data);
};

export { create };
