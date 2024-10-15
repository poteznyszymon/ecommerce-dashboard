import { ordersDashboardInfo } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";

const useGetOrdersInfo = () => {
  const { data, isLoading } = useQuery<ordersDashboardInfo>({
    queryKey: ["orders", "info-dashboard"],
    queryFn: async () => {
      try {
        const response = await fetch("/api/order/get-info");
        const data = await response.json();
        if (!data.ok) throw new Error(data.error || "Something went wrong");
        return data;
      } catch (error) {
        console.log(error);
        return null;
      }
    },
  });

  return { data, isLoading };
};

export default useGetOrdersInfo;
