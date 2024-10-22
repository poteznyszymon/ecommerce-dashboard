import { getProductData } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";

const useGetAllProducts = (page: string) => {
  console.log(page);
  const { data, isLoading } = useQuery<getProductData>({
    queryKey: ["products", page],
    queryFn: async () => {
      try {
        const response = await fetch(`/api/product?page=${page}`);
        const data = await response.json();
        if (!data.ok) throw new Error(data.error || "Something went wrong");
        return data || null;
      } catch (error) {
        console.log(error);
      }
    },
  });

  return { data, isLoading };
};

export default useGetAllProducts;
