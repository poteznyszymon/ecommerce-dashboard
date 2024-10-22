import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getProductData } from "@/lib/types";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "../ui/button";

interface ProductsPageProps {
  data: getProductData;
}

const ProductsTable = ({ data }: ProductsPageProps) => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Image</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Short Description</TableHead>
            <TableHead>Full Description</TableHead>
            <TableHead>Material</TableHead>
            <TableHead>Color</TableHead>
            <TableHead>Sizes</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Regular Price</TableHead>
            <TableHead className="w-22">Discount Price</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">
                <img
                  className="size-14 rounded-sm object-contain"
                  src={product.images[0]}
                  alt="Product photo"
                />
              </TableCell>
              <TableCell>{product.title}</TableCell>
              <TableCell>{product.shortDescription}</TableCell>
              <TableCell className="min-w-[20rem] ">
                {product.fullDescription}
              </TableCell>
              <TableCell>{product.material}</TableCell>
              <TableCell>{product.color}</TableCell>
              <TableCell>{product.sizes.join(", ")}</TableCell>
              <TableCell>{product.gender}</TableCell>
              <TableCell>${product.regularPrice}</TableCell>
              <TableCell>
                {product.discountPrice ? `${"$" + product.discountPrice}` : "-"}
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
  );
};

export default ProductsTable;
