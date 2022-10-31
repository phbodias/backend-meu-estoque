import { PermissionName, Permissions } from "@prisma/client";
import * as permissionsRepository from "../repositories/permissionsRepository";
import permissionData from "../types/permissionType";

const createPermission = async (data: permissionData): Promise<Permissions> => {
  const permissionAlreadyExists = await findByName(data.name);
  if (permissionAlreadyExists)
    throw { code: "Conflict", message: "Permission already exists" };

  return permissionsRepository.create(data);
};

const findByName = async (name: PermissionName): Promise<Permissions> => {
  return await permissionsRepository.findByName(name);
};

export { createPermission };
