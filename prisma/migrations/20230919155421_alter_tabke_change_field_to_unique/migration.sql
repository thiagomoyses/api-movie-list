/*
  Warnings:

  - A unique constraint covering the columns `[user_reff]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_user_reff_key" ON "User"("user_reff");
