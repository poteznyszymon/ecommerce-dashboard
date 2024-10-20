import { categories } from "@/lib/productCategories";
import { colors } from "@/lib/colors";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";

interface ProductSelectorsProps {
  productSelects: {
    category: string;
    color: string;
  };
  handleChange: (field: string, value: string) => void;
}

const ProductSelectors = ({
  productSelects,
  handleChange,
}: ProductSelectorsProps) => {
  return (
    <div className="flex flex-col justify-center gap-10 h-full">
      <div className="flex flex-col gap-1">
        <Label htmlFor="category">Category</Label>
        <Select
          onValueChange={(value) => handleChange("category", value)}
          value={productSelects.category}
        >
          <SelectTrigger id="category">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {categories.map((item) => (
                <SelectItem key={item.title} value={item.values}>
                  {item.title}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="color">Color</Label>
        <Select
          onValueChange={(value) => handleChange("color", value)}
          value={productSelects.color}
        >
          <SelectTrigger id="color">
            <SelectValue placeholder="Select a color" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {colors.map((item) => (
                <SelectItem key={item.title} value={item.value}>
                  {item.title}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ProductSelectors;
