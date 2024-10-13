import MenuBar from "@/components/root-layout/MenuBar";
import MobileMenuBar from "@/components/root-layout/MobileMenuBar";
import Navbar from "@/components/root-layout/Navbar";
import SquareBackground from "@/components/shared/SquareBackground";
import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <main className="min-h-screen bg-secondary">
      <Navbar />
      <div className="flex min-h-screen">
        <MenuBar />
        <Outlet />
      </div>
      <Toaster />
      <SquareBackground />
      <MobileMenuBar />
    </main>
  );
};

export default RootLayout;
