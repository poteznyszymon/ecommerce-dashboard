import { Prisma } from "@prisma/client";
import { ProductType } from "../types/product";

export const isProductRequired = (data: Prisma.ProductCreateInput) => {
  const requiredFields = [
    "title",
    //"images", // Optional field
    "shortDescription",
    "fullDescription",
    "material",
    "color",
    "sizes",
    "gender",
    "category",
    "regularPrice",
  ];

  // Check each required field for null or undefined (falsy values like 0 will not be excluded)
  return requiredFields.every((field) => {
    const value = data[field as keyof ProductType];
    return value !== null && value !== undefined;
  });
};
