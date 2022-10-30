import { Roles, RoleNames } from "@prisma/client";
import prisma from "../databases/prisma";

const findByName = async (name: RoleNames): Promise<Roles> => {
  const role: Roles = await prisma.roles.findFirst({
    where: { name },
  });
  return role;
};

export { findByName };
