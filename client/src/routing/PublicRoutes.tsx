import SquareBackground from "@/components/shared/SquareBackground";
import useGetCurrentUser from "@/hooks/auth/useGetCurrentUser";
import { Loader2 } from "lucide-react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const { isLoading, data: user } = useGetCurrentUser();

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <SquareBackground />
        <Loader2 className="animate-spin h-5" />
      </div>
    );
  }

  if (user) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PublicRoutes;
