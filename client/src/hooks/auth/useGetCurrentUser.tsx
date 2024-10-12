import { Admin } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";

const useAuthUser = () => {
  const { data, isLoading, isError } = useQuery<Admin>({
    queryKey: ["authUser"],
    queryFn: async () => {
      try {
        const res = await fetch("/api/auth/get-me");
        const data = await res.json();
        if (!res.ok) throw new Error(data.error);
        return data.user || null;
      } catch (error) {
        console.log("Error fetching user:", error);
        return null;
      }
    },
  });

  return { data, isLoading, isError };
};

export default useAuthUser;
