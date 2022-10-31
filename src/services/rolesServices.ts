import { RoleNames, Roles } from "@prisma/client";
import * as rolesRepository from "../repositories/rolesRepository";

const createRole = async (name: RoleNames): Promise<Roles | Error> => {
  const roleAlreadyExists: Roles = await findByName(name);
  if (roleAlreadyExists)
    throw { code: "Conflict", message: "Role already exists" };

  return await rolesRepository.create(name);
};

const findByName = async (name: RoleNames): Promise<Roles> => {
  const role = await rolesRepository.findByName(name);
  return role;
};

export { createRole };
