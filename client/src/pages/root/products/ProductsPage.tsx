import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil, Trash2 } from "lucide-react";

const productsData = [
  {
    id: 1,
    title: "Classic White T-Shirt",
    shortDescription: "Comfortable cotton tee",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat a risus a eleifend. Aenean non facilisis leo, lobortis fermentum justo. Ut nec enim sollicitudin, interdum leo vitae, suscipit est.",
    material: "100% Cotton",
    color: "White",
    sizes: ["S", "M", "L", "XL"],
    gender: "Unisex",
    regularPrice: 19.99,
    discountPrice: 14.99,
  },
  {
    id: 2,
    title: "Slim Fit Jeans",
    shortDescription: "Modern denim jeans",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat a risus a eleifend. Aenean non facilisis leo, lobortis fermentum justo. Ut nec enim sollicitudin, interdum leo vitae, suscipit est.",

    material: "Denim",
    color: "Blue",
    sizes: ["30", "32", "34", "36"],
    gender: "Male",
    regularPrice: 49.99,
    discountPrice: null,
  },
  {
    id: 3,
    title: "Floral Summer Dress",
    shortDescription: "Light and breezy dress",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat a risus a eleifend. Aenean non facilisis leo, lobortis fermentum justo. Ut nec enim sollicitudin, interdum leo vitae, suscipit est.",

    material: "Polyester",
    color: "Multicolor",
    sizes: ["XS", "S", "M", "L"],
    gender: "Female",
    regularPrice: 39.99,
    discountPrice: 29.99,
  },
  {
    id: 4,
    title: "Athletic Performance Shorts",
    shortDescription: "Breathable workout shorts",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat a risus a eleifend. Aenean non facilisis leo, lobortis fermentum justo. Ut nec enim sollicitudin, interdum leo vitae, suscipit est.",

    material: "Polyester Blend",
    color: "Black",
    sizes: ["S", "M", "L", "XL"],
    gender: "Unisex",
    regularPrice: 24.99,
    discountPrice: null,
  },
  {
    id: 5,
    title: "Cozy Knit Sweater",
    shortDescription: "Warm winter sweater",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat a risus a eleifend. Aenean non facilisis leo, lobortis fermentum justo. Ut nec enim sollicitudin, interdum leo vitae, suscipit est.",

    material: "Wool Blend",
    color: "Gray",
    sizes: ["S", "M", "L", "XL"],
    gender: "Unisex",
    regularPrice: 59.99,
    discountPrice: 44.99,
  },
];

const ProductsPage = () => {
  return (
    <div className="min-h-screen p-5 w-full z-10">
      <div className="p-5 bg-background border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Short Description</TableHead>
              <TableHead>Full Description</TableHead>
              <TableHead>Material</TableHead>
              <TableHead>Color</TableHead>
              <TableHead>Sizes</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Regular Price</TableHead>
              <TableHead className="w-22">Discount Description</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {productsData.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{product.id}</TableCell>
                <TableCell>{product.title}</TableCell>
                <TableCell>{product.shortDescription}</TableCell>
                <TableCell className="min-w-[20rem]">
                  {product.fullDescription}
                </TableCell>
                <TableCell>{product.material}</TableCell>
                <TableCell>{product.color}</TableCell>
                <TableCell>{product.sizes.join(", ")}</TableCell>
                <TableCell>{product.gender}</TableCell>
                <TableCell>${product.regularPrice}</TableCell>
                <TableCell>
                  {product.discountPrice ? `${product.discountPrice}` : "-"}
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Pencil className="size-4 mr-2" />
                      Edit
                    </Button>
                    <Button variant="destructive" size="sm">
                      <Trash2 className="size-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ProductsPage;
