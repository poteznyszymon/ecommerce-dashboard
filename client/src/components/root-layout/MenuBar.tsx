import { useState } from "react";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";
import { navLinks } from "@/lib/nav-links";
import { Link } from "react-router-dom";

const MenuBar = () => {
  const [collapsedMenu, setCollapsedMenu] = useState(true);

  return (
    <div
      className={`hidden md:flex bg-background border-r z-10 sticky top-[5rem] items-end flex-col  h-[calc(100vh-5rem)] p-5 ${
        collapsedMenu ? "min-w-24" : "min-w-52"
      }`}
    >
      <Button
        variant={"ghost"}
        onClick={() => setCollapsedMenu(!collapsedMenu)}
        className="size-fit mb-5 mr-1"
      >
        <ChevronLeft
          strokeWidth={1.7}
          className={`size-5 transition-transform duration-300 text-muted-foreground ${
            collapsedMenu ? "rotate-180" : "rotate-0"
          }`}
        />
      </Button>
      {navLinks.map((item) => (
        <Link to={item.link} className="w-full" key={item.name}>
          <Button className="w-full text-muted-foreground" variant={"ghost"}>
            <div className="flex items-center w-full gap-5">
              <div className="flex-shrink-0">
                <item.icon className="size-5" strokeWidth={1.7} />
              </div>
              <p className={` ${collapsedMenu ? "hidden" : ""}`}>{item.name}</p>
            </div>
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default MenuBar;
