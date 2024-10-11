/*
  Warnings:

  - The `color` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `sizes` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `category` on the `Product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `gender` on the `Product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "color",
ADD COLUMN     "color" TEXT[],
DROP COLUMN "sizes",
ADD COLUMN     "sizes" TEXT[],
DROP COLUMN "category",
ADD COLUMN     "category" TEXT NOT NULL,
DROP COLUMN "gender",
ADD COLUMN     "gender" TEXT NOT NULL;

-- DropEnum
DROP TYPE "Category";

-- DropEnum
DROP TYPE "Color";

-- DropEnum
DROP TYPE "Gender";

-- DropEnum
DROP TYPE "Size";
