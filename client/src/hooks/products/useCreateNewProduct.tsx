import { addProductData } from "@/lib/types";
import { useMutation } from "@tanstack/react-query";

const useCreateNewProduct = () => {
  const { mutate: addProduct, isPending } = useMutation({
    mutationFn: async (productData: addProductData) => {
      try {
        const response = await fetch("/api/product/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        });
        if (!response.ok) {
          throw new Error("Something went wrong please try again");
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error);
        throw new Error("Something went wrong please try again.");
      }
    },
  });

  return { addProduct, isPending };
};

export default useCreateNewProduct;
