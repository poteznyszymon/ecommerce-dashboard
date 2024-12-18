import { Request, Response } from "express";
import prisma from "../prisma/prisma";
import { v2 } from "cloudinary";
import { ProductType } from "../types/product";
import { Prisma } from "@prisma/client";

export const addProduct = async (req: Request, res: Response) => {
  try {
    const {
      title,
      shortDescription,
      fullDescription,
      material,
      images,
      color,
      sizes,
      gender,
      category,
      regularPrice,
      discountPrice,
    } = req.body as ProductType;

    if (
      !title ||
      !shortDescription ||
      !fullDescription ||
      !material ||
      !sizes ||
      !gender ||
      !category ||
      !regularPrice
    ) {
      res.status(400).json({
        success: "false",
        error: "Some required fields are missing",
      });
      return;
    }

    const sizesArray = typeof sizes === "string" ? JSON.parse(sizes) : sizes;

    let imagesLinks: string[] = [];
    if (images && images.length > 0) {
      imagesLinks = await Promise.all(
        images.map(async (image) => {
          const imageResponse = await v2.uploader.upload(image);
          return imageResponse.secure_url;
        })
      );
    }

    const newProduct = await prisma.product.create({
      data: {
        title,
        shortDescription,
        fullDescription,
        material,
        images: imagesLinks,
        color,
        sizes: sizesArray,
        gender,
        category,
        regularPrice: parseFloat(regularPrice),
        discountPrice: discountPrice ? parseFloat(discountPrice) : undefined,
      },
    });

    res.status(200).json({
      success: "true",
      message: "Product added successfully",
      product: newProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  const pageSize = 6;
  try {
    let page = parseInt(req.query.page as string) || 1;
    const sortedBy = req.query.sortedBy || "latest";

    const totalProducts = await prisma.product.count();
    const totalPages = Math.ceil(totalProducts / pageSize);
    const hasNextPage = page < totalPages;

    if (page > totalPages) {
      page = totalPages;
    }
    if (page < 1) {
      page = 1;
    }

    let orderBy: Prisma.ProductOrderByWithRelationInput;

    if (sortedBy === "priceAsc") {
      orderBy = { regularPrice: "asc" };
    } else if (sortedBy === "priceDesc") {
      orderBy = { regularPrice: "desc" };
    } else if (sortedBy === "oldest") {
      orderBy = { id: "asc" };
    } else {
      orderBy = { id: "desc" };
    }

    const allProducts = await prisma.product.findMany({
      orderBy,
      skip: (page - 1) * pageSize,
      take: pageSize,
    });
    res.status(200).json({
      ok: true,
      currentPage: page,
      totalPages: totalPages,
      totalProducts: totalProducts,
      pageSize: pageSize,
      hasNextPage: hasNextPage,
      products: allProducts,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const productId = Number(id);

    const usersWithProductInWishlist = await prisma.user.findMany({
      where: {
        wishList: {
          some: { id: productId },
        },
      },
    });

    for (const user of usersWithProductInWishlist) {
      await prisma.user.update({
        where: { id: user.id },
        data: {
          wishList: {
            disconnect: { id: productId },
          },
        },
      });
    }

    const deletedProduct = await prisma.product.delete({
      where: { id: productId },
    });

    res.status(200).json({
      success: "true",
      message: "Product deleted successfully",
      deletedProduct: deletedProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
