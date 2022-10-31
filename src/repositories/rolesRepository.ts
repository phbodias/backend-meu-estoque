import { Roles, RoleNames } from "@prisma/client";
import prisma from "../databases/prisma";

const create = async (name: RoleNames): Promise<Roles> => {
  return await prisma.roles.create({ data: { name } });
};

const findByName = async (name: RoleNames): Promise<Roles> => {
  return await prisma.roles.findFirst({ where: { name } });
};

export { create, findByName };
