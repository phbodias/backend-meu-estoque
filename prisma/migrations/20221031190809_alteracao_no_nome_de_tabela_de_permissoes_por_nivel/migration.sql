/*
  Warnings:

  - You are about to drop the `rolepermissions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "rolepermissions" DROP CONSTRAINT "rolepermissions_permissionId_fkey";

-- DropForeignKey
ALTER TABLE "rolepermissions" DROP CONSTRAINT "rolepermissions_roleId_fkey";

-- DropTable
DROP TABLE "rolepermissions";

-- CreateTable
CREATE TABLE "Role_permissions" (
    "id" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,
    "permissionId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Role_permissions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Role_permissions_id_key" ON "Role_permissions"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Role_permissions_roleId_permissionId_key" ON "Role_permissions"("roleId", "permissionId");

-- AddForeignKey
ALTER TABLE "Role_permissions" ADD CONSTRAINT "Role_permissions_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role_permissions" ADD CONSTRAINT "Role_permissions_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "Permissions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
