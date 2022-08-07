/*
  Warnings:

  - You are about to drop the column `test` on the `Channel` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Channel_test_key";

-- AlterTable
ALTER TABLE "Channel" DROP COLUMN "test";
