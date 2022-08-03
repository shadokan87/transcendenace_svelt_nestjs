/*
  Warnings:

  - You are about to drop the column `OnBoard` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nickname]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "OnBoard",
ADD COLUMN     "nickname" TEXT NOT NULL DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX "User_nickname_key" ON "User"("nickname");
