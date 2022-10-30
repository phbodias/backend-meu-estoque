/*
  Warnings:

  - Changed the type of `name` on the `Permissions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "PermissionNames" AS ENUM ('Read_tables', 'Change_tables', 'Add_tables', 'Delete_tables', 'Add_users', 'Remove_users', 'Edit_userRole');

-- AlterTable
ALTER TABLE "Permissions" DROP COLUMN "name",
ADD COLUMN     "name" "PermissionNames" NOT NULL;

-- DropEnum
DROP TYPE "PermissionName";

-- CreateIndex
CREATE UNIQUE INDEX "Permissions_name_key" ON "Permissions"("name");
