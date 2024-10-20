import { Label } from "@radix-ui/react-label";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

interface ProductDetailsProps {
  productDetails: {
    title: string;
    shortDescription: string;
    fullDescription: string;
    material: string;
    sizes: string[];
    gender: string;
  };
  handleChange: (field: string, value: string | string[]) => void;
}

const ProductDetails = ({
  productDetails,
  handleChange,
}: ProductDetailsProps) => {
  const handleSizeChange = (size: string) => {
    const newSizes = productDetails.sizes.includes(size)
      ? productDetails.sizes.filter((s) => s !== size)
      : [...productDetails.sizes, size];
    handleChange("sizes", newSizes);
  };

  return (
    <>
      <div>
        <label className="text-sm font-semibold" htmlFor="title">
          Title
        </label>
        <Input
          onChange={(e) => handleChange("title", e.target.value)}
          value={productDetails.title}
          required
          placeholder="Enter product title"
          id="title"
        />
      </div>
      <div>
        <label className="text-sm font-semibold" htmlFor="short">
          Short description
        </label>
        <Input
          onChange={(e) => handleChange("shortDescription", e.target.value)}
          value={productDetails.shortDescription}
          required
          placeholder="Enter short description"
          id="short"
        />
      </div>
      <div>
        <label className="text-sm font-semibold" htmlFor="full">
          Full description
        </label>
        <Textarea
          onChange={(e) => handleChange("fullDescription", e.target.value)}
          value={productDetails.fullDescription}
          required
          placeholder="Enter full description"
          id="full"
          className="max-h-48 h-[5rem]"
        />
      </div>
      <div>
        <label className="text-sm font-semibold" htmlFor="material">
          Material
        </label>
        <Input
          onChange={(e) => handleChange("material", e.target.value)}
          value={productDetails.material}
          required
          placeholder="Enter product material"
          id="material"
        />
      </div>
      <div className=" gap-5">
        <p className="text-sm font-semibold">Sizes</p>
        <div className="flex gap-5 lg:gap-8 flex-wrap">
          {["xs", "s", "m", "l", "xl"].map((size) => (
            <div key={size} className="flex items-center space-x-2">
              <Checkbox
                key={size}
                id={`size-${size}`}
                checked={productDetails.sizes.includes(size)}
                onCheckedChange={() => handleSizeChange(size)}
              />
              <Label htmlFor={`size-${size}`} className="uppercase">
                {size}
              </Label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-sm font-semibold">Gender</p>
        <RadioGroup
          defaultValue="unisex"
          onValueChange={(value) => handleChange("gender", value)}
        >
          <div className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female">Female</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="unisex" id="unisex" />
              <Label htmlFor="unisex">Unisex</Label>
            </div>
          </div>
        </RadioGroup>
      </div>
    </>
  );
};

export default ProductDetails;
