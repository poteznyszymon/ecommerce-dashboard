import MenuBar from "@/components/shared/MenuBar";
import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="flex">
        <MenuBar className="fixed bg-background  text-sm h-full  top-[5rem] p-5 hidden gap-1 sm:flex flex-col lg:w-72" />
        <Outlet />
      </div>
      <MenuBar className="fixed bg-background bottom-0 flex w-full justify-center gap-5 py-3 sm:hidden" />
    </main>
  );
};

export default RootLayout;
