import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <main>
      <Outlet />
      <Toaster />
    </main>
  );
};

export default RootLayout;
