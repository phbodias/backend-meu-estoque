import { PermissionName, RoleNames, Role_permissions } from "@prisma/client";

interface rolePermissionData {
  role: RoleNames;
  permission: PermissionName;
}

type rolePermissionType = Omit<Role_permissions, "id" | "createdAt">;

export { rolePermissionData, rolePermissionType };
