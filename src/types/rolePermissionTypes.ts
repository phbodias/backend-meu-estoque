import { PermissionName, RoleNames, RolePermissions } from "@prisma/client";

interface rolePermissionData {
  role: RoleNames;
  permission: PermissionName;
}

type rolePermissionType = Omit<RolePermissions, "id" | "createdAt">;

export { rolePermissionData, rolePermissionType };
