/*
  Warnings:

  - A unique constraint covering the columns `[test]` on the table `Channel` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Channel" ADD COLUMN     "test" SERIAL NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Channel_test_key" ON "Channel"("test");
