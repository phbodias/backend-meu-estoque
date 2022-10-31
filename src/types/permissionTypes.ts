import { Permissions } from "@prisma/client";

type permissionData = Omit<Permissions, "id" | "createdAt">;

export default permissionData;
