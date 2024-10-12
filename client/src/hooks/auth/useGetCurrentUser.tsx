import { useMutation } from "@tanstack/react-query";

const useGetCurrentUser = () => {
  const {
    mutate: getCurrentUser,
    data: currentUser,
    isPending,
  } = useMutation({
    mutationFn: async () => {},
  });

  return { getCurrentUser, currentUser, isPending };
};

export default useGetCurrentUser;
