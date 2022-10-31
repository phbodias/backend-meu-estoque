import { Permissions } from "@prisma/client";

type TPermissionData = Omit<Permissions, "id" | "createdAt">;

export default TPermissionData;
