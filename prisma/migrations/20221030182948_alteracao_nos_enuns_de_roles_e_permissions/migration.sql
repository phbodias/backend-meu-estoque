/*
  Warnings:

  - Changed the type of `name` on the `Permissions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `name` on the `Roles` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "RoleNames" AS ENUM ('Owner', 'Admin', 'Seller', 'Reader');

-- CreateEnum
CREATE TYPE "PermissionName" AS ENUM ('Read_tables', 'Change_tables', 'Add_tables', 'Delete_tables', 'Add_users', 'Remove_users', 'Edit_userRole');

-- AlterTable
ALTER TABLE "Permissions" DROP COLUMN "name",
ADD COLUMN     "name" "PermissionName" NOT NULL;

-- AlterTable
ALTER TABLE "Roles" DROP COLUMN "name",
ADD COLUMN     "name" "RoleNames" NOT NULL;

-- DropEnum
DROP TYPE "PermissionsTypes";

-- DropEnum
DROP TYPE "RoleTypes";

-- CreateIndex
CREATE UNIQUE INDEX "Permissions_name_key" ON "Permissions"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Roles_name_key" ON "Roles"("name");