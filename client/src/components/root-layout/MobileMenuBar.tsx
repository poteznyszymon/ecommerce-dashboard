import { navLinks } from "@/lib/nav-links";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const MobileMenuBar = () => {
  const [showMenuBar, setShowMenuBar] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowMenuBar(true)}
        className="md:hidden size-12 z-20 bg-background border cursor-pointer hover:bg-secondary flex items-center justify-center rounded-full shadow-md fixed bottom-5 left-5"
      >
        <HamburgerMenuIcon className="size-6" />
      </div>
      <div
        onClick={() => setShowMenuBar(false)}
        className={`md:hidden fixed top-0 w-screen h-screen bg-background/60 duration-300 ${
          showMenuBar ? "z-30 opacity-100" : "-z-10 opacity-0"
        }`}
      ></div>
      <div
        className={`md:hidden w-full px-5 py-14 bg-background fixed flex flex-col z-40 duration-500 border ${
          showMenuBar ? "bottom-0 " : "-bottom-[40rem]"
        }`}
      >
        {navLinks.map((item) => (
          <Link
            key={item.name}
            to={item.link}
            className="w-full"
            onClick={() => setShowMenuBar(false)}
          >
            <Button variant={"ghost"} className="w-full">
              <div className="flex w-full gap-3">
                <item.icon className="size-5" strokeWidth={1.7} />
                <p>{item.name}</p>
              </div>
            </Button>
          </Link>
        ))}
        <div
          onClick={() => setShowMenuBar(false)}
          className="absolute top-5 right-5 group cursor-pointer"
        >
          <X className="size-4 text-muted-foreground group-hover:text-foreground" />
        </div>
      </div>
    </>
  );
};

export default MobileMenuBar;
