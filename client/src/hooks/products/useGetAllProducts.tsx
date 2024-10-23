import { getProductData } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";

const useGetAllProducts = (page: string, sortedBy: string) => {
  const { data, isLoading, refetch, isRefetching, isError, isRefetchError } =
    useQuery<getProductData>({
      queryKey: ["products", page],
      queryFn: async () => {
        try {
          const response = await fetch(
            `/api/product?page=${page}&sortedBy=${sortedBy}`
          );
          const data = await response.json();
          if (!data.ok) throw new Error(data.error || "Something went wrong");
          return data || null;
        } catch (error) {
          console.log(error);
        }
      },
    });

  return { data, isLoading, refetch, isRefetching, isError, isRefetchError };
};

export default useGetAllProducts;
