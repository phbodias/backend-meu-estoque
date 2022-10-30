import { Roles, RoleNames } from "@prisma/client";
import prisma from "../databases/prisma";

const findByName = async (name: RoleNames) => {
  const role: Roles = await prisma.roles.findFirst({where: {name}});
};
