import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";

interface ProductPricingProps {
  productPricing: {
    regularPrice: string;
    discountPrice: string | undefined;
  };
  handleChange: (field: string, value: string) => void;
}

const ProductPricing = ({
  productPricing,
  handleChange,
}: ProductPricingProps) => {
  const [onDiscount, setOnDiscount] = useState(false);

  return (
    <div className="h-full flex flex-col gap-4">
      <div>
        <label className="text-sm font-semibold" htmlFor="price">
          Regular Price
        </label>
        <Input
          value={productPricing.regularPrice}
          onChange={(e) =>
            handleChange(
              "regularPrice",
              parseInt(e.target.value) < 0 ? "0" : e.target.value
            )
          }
          required
          type="number"
          placeholder="Enter regular price"
          id="price"
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          checked={onDiscount}
          onCheckedChange={() => setOnDiscount(!onDiscount)}
        />
        <p className="text-sm font-semibold">Product on discount</p>
      </div>
      {onDiscount && (
        <div>
          <label className="text-sm font-semibold" htmlFor="discountPrice">
            Discount Price
          </label>
          <Input
            value={productPricing.discountPrice || ""}
            onChange={(e) =>
              handleChange(
                "discountPrice",
                parseInt(e.target.value) < 0 ? "0" : e.target.value
              )
            }
            required={onDiscount}
            type="number"
            placeholder="Enter discount price"
            id="discountPrice"
          />
        </div>
      )}
    </div>
  );
};

export default ProductPricing;
