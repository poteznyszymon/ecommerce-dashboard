import SquareBackground from "@/components/shared/SquareBackground";
import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <SquareBackground />
      <Outlet />
      <Toaster />
    </main>
  );
};

export default AuthLayout;
