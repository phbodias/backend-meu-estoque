/*
  Warnings:

  - You are about to drop the `RolePermissions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "RolePermissions" DROP CONSTRAINT "RolePermissions_permissionId_fkey";

-- DropForeignKey
ALTER TABLE "RolePermissions" DROP CONSTRAINT "RolePermissions_roleId_fkey";

-- DropTable
DROP TABLE "RolePermissions";

-- CreateTable
CREATE TABLE "rolepermissions" (
    "id" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,
    "permissionId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "rolepermissions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "rolepermissions_id_key" ON "rolepermissions"("id");

-- CreateIndex
CREATE UNIQUE INDEX "rolepermissions_roleId_permissionId_key" ON "rolepermissions"("roleId", "permissionId");

-- AddForeignKey
ALTER TABLE "rolepermissions" ADD CONSTRAINT "rolepermissions_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rolepermissions" ADD CONSTRAINT "rolepermissions_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "Permissions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
