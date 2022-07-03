-- CreateEnum
CREATE TYPE "ChanRoles" AS ENUM ('USER', 'ADMIN', 'BAN');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "login" TEXT NOT NULL,
    "nick" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
