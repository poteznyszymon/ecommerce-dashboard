import { useState } from "react";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";
import { navLinks } from "@/lib/nav-links";
import { Link } from "react-router-dom";

const MenuBar = () => {
  const [collapsedMenu, setCollapsedMenu] = useState(true);

  return (
    <div
      className={`hidden md:flex bg-background border-r z-10 sticky top-[5rem] items-end flex-col transition-all duration-300 h-[calc(100vh-5rem)] p-5 ${
        collapsedMenu ? "w-24" : "w-60"
      }`}
    >
      <Button
        variant={"ghost"}
        onClick={() => setCollapsedMenu(!collapsedMenu)}
        className="size-fit mb-5 mr-1"
      >
        <ChevronLeft
          strokeWidth={1.7}
          className={`size-5 transition-transform duration-300 ${
            collapsedMenu ? "rotate-180" : "rotate-0"
          }`}
        />
      </Button>
      {navLinks.map((item) => (
        <Link to={item.link} className="w-full" key={item.name}>
          <Button className="w-full" variant={"ghost"}>
            <div className="flex items-center w-full gap-5">
              <div className="flex-shrink-0">
                <item.icon className="size-5" strokeWidth={1.7} />
              </div>
              <p
                className={`duration-300 ${
                  collapsedMenu ? "opacity-0 max-w-0" : "max-w-none opacity-100"
                }`}
              >
                {item.name}
              </p>
            </div>
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default MenuBar;
