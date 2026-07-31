/*
  Warnings:

  - Made the column `reference` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "reference" SET NOT NULL;
