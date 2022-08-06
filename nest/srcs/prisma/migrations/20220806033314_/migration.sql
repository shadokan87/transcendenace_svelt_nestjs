-- CreateTable
CREATE TABLE "User" (
    "school_id" INTEGER NOT NULL,
    "unique_name" TEXT NOT NULL,
    "nickname" TEXT NOT NULL DEFAULT '',
    "username" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "profileUrl" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "friends" INTEGER[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Stats" (
    "UserId" INTEGER NOT NULL,
    "wins" INTEGER NOT NULL,
    "losses" INTEGER NOT NULL,
    "ladder_level" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "UserId" INTEGER NOT NULL,
    "tag" TEXT NOT NULL,
    "winner" INTEGER NOT NULL,
    "looser" INTEGER NOT NULL,
    "winners_points" INTEGER NOT NULL,
    "loosers_points" INTEGER NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Channel" (
    "id" SERIAL NOT NULL,
    "admins" INTEGER[],
    "UserId" INTEGER NOT NULL,

    CONSTRAINT "Channel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "chanId" INTEGER NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_school_id_key" ON "User"("school_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_unique_name_key" ON "User"("unique_name");

-- CreateIndex
CREATE UNIQUE INDEX "User_nickname_key" ON "User"("nickname");

-- CreateIndex
CREATE UNIQUE INDEX "Stats_UserId_key" ON "Stats"("UserId");

-- CreateIndex
CREATE UNIQUE INDEX "Channel_id_key" ON "Channel"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Post_id_key" ON "Post"("id");

-- AddForeignKey
ALTER TABLE "Stats" ADD CONSTRAINT "Stats_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("school_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("school_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Channel" ADD CONSTRAINT "Channel_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("school_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_chanId_fkey" FOREIGN KEY ("chanId") REFERENCES "Channel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
