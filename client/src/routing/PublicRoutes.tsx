import SquareBackground from "@/components/shared/SquareBackground";
import { Loader2 } from "lucide-react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const user = null;
  const loading = false;

  if (loading) {
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
