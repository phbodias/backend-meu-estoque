/*
  Warnings:

  - The values [ONLY_READ,SELLER,MANAGER,OWNER] on the enum `RoleTypes` will be removed. If these variants are still used in the database, this will fail.
  - Changed the type of `name` on the `Roles` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "RoleTypes_new" AS ENUM ('Owner', 'Admin', 'Seller', 'Reader');
ALTER TABLE "Roles" ALTER COLUMN "name" TYPE "RoleTypes_new" USING ("name"::text::"RoleTypes_new");
ALTER TYPE "RoleTypes" RENAME TO "RoleTypes_old";
ALTER TYPE "RoleTypes_new" RENAME TO "RoleTypes";
DROP TYPE "RoleTypes_old";
COMMIT;

-- AlterTable
ALTER TABLE "Roles" DROP COLUMN "name",
ADD COLUMN     "name" "RoleTypes" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Roles_name_key" ON "Roles"("name");
