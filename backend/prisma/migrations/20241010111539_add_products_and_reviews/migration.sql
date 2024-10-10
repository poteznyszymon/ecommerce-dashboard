-- CreateEnum
CREATE TYPE "Color" AS ENUM ('RED', 'BLUE', 'ORANGE', 'BLACK', 'GREEN', 'YELLOW');

-- CreateEnum
CREATE TYPE "Size" AS ENUM ('XS', 'S', 'M', 'L', 'XL');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MEN', 'WOMEN', 'KIDS');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('TSHIRT', 'SWEATSHIRTS', 'JACKETS', 'BOTTOMS', 'FOOTWEAR', 'ACCESSORIES');

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "smallDescription" TEXT NOT NULL,
    "fullDescription" TEXT NOT NULL,
    "material" TEXT NOT NULL,
    "images" TEXT[],
    "color" "Color"[],
    "sizes" "Size"[],
    "genders" "Gender"[],
    "category" "Category" NOT NULL,
    "regularPrice" DOUBLE PRECISION NOT NULL,
    "discountPrice" DOUBLE PRECISION,
    "totalOrders" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reviev" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "Reviev_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_title_key" ON "Product"("title");

-- AddForeignKey
ALTER TABLE "Reviev" ADD CONSTRAINT "Reviev_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
