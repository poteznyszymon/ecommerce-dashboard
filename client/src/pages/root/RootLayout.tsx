import MenuBar from "@/components/root-layout/MenuBar";
import MobileMenuBar from "@/components/root-layout/MobileMenuBar";
import Navbar from "@/components/root-layout/Navbar";
import SquareBackground from "@/components/shared/SquareBackground";
import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <main className="min-h-screen w-full flex flex-col bg-secondary">
      <Navbar />
      <div className="flex w-full min-h-screen">
        <MenuBar />
        <div className="flex-grow overflow-x-hidden z-10">
          <Outlet />
        </div>
      </div>
      <Toaster />
      <SquareBackground />
      <MobileMenuBar />
    </main>
  );
};

export default RootLayout;
