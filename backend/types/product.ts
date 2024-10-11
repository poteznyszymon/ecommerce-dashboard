export interface ProductType {
  title: string;
  shortDescription: string;
  fullDescription: string;
  material: string;
  images: string[];
  color: string[];
  sizes: string[];
  gender: string;
  category: string;
  regularPrice: string;
  discountPrice?: string;
}

/*enum Color {
  RED = "RED",
  BLUE = "BLUE",
  ORANGE = "ORANGE",
  BLACK = "BLACK",
  GREEN = "GREEN",
  YELLOW = "YELLOW",
}

enum Size {
  XS = "XS",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
}

enum Gender {
  MEN = "MEN",
  WOMEN = "WOMEN",
  KIDS = "KIDS",
}

enum Category {
  TSHIRT = "TSHIRT",
  SWEATSHIRTS = "SWEATSHIRTS",
  JACKETS = "JACKETS",
  BOTTOMS = "BOTTOMS",
  FOOTWEAR = "FOOTWEAR",
  ACCESSORIES = "ACCESSORIES",
}
*/
