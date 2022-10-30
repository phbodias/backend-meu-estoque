import { RoleNames, Roles } from "@prisma/client";
import * as rolesRepository from "../repositories/rolesRepository";

const createRole = async (name: RoleNames) => {
  const role = await findByName(name);
  return role;
};

const findByName = async (name: RoleNames): Promise<Roles> => {
  const role = await rolesRepository.findByName(name);
  return role;
};

export { createRole };
