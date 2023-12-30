/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `drivers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "drivers_name_key" ON "drivers"("name");
