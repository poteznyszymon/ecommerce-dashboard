import { authValues } from "@/utils/validation";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "../use-toast";
import { useNavigate } from "react-router-dom";

const useLoginUser = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { mutate: loginUser, isPending } = useMutation({
    mutationFn: async (values: authValues) => {
      try {
        const res = await fetch("/api/auth/sign-in", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || "Something went wrong during login");
        }
        return data;
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Unknown error occurred";
        throw new Error(errorMessage);
      }
    },
    onSuccess: () => {
      navigate("/");
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        description: `${error.message}`,
      });
    },
  });

  return { loginUser, isPending };
};

export default useLoginUser;
