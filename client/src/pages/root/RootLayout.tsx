import SquareBackground from "@/components/shared/SquareBackground";
import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <Outlet />
      <Toaster />
      <SquareBackground />
    </main>
  );
};

export default RootLayout;
