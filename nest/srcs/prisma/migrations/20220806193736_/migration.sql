/*
  Warnings:

  - Added the required column `name` to the `Channel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Channel" ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "visibility" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bans" INTEGER[],
ADD COLUMN     "pendingFriends" INTEGER[],
ADD COLUMN     "useIntraPhoto" BOOLEAN NOT NULL DEFAULT true;
