import prisma from "../databases/prisma";

const create = async (data) => {
  return await prisma.users.create({ data });
};

const findAll = async () => {
  return await prisma.users.findMany({
    select: {
      name: true,
      Role: {
        select: {
          name: true,
        },
      },
    },
  });
};

export { findAll };
