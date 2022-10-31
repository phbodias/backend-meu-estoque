import { PermissionName, RoleNames, Role_permissions } from "@prisma/client";

interface IRolePermissionData {
  role: RoleNames;
  permission: PermissionName;
}

interface IPermissionsForRole {
  role: RoleNames;
  permissions: PermissionName[];
}

type TRolePermissionType = Omit<Role_permissions, "id" | "createdAt">;

export { IRolePermissionData, TRolePermissionType, IPermissionsForRole };
