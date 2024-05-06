/*
  Warnings:

  - You are about to drop the column `stripeCustumerId` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "stripeCustumerId",
ADD COLUMN     "stripeCustomerId" TEXT;
