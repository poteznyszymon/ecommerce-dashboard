import SquareBackground from "@/components/shared/SquareBackground";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <SquareBackground />
      <Outlet />
    </main>
  );
};

export default AuthLayout;
