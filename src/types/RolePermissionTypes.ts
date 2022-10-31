import { PermissionName, RoleNames } from "@prisma/client";

export interface rolePermissionData {
  role: RoleNames;
  permission: PermissionName;
}
