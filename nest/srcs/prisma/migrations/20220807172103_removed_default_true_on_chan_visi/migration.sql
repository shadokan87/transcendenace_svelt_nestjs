-- AlterTable
ALTER TABLE "Channel" ALTER COLUMN "visibility" DROP DEFAULT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "subscribedRooms" INTEGER[];
