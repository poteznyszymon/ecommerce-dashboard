import { Link } from "react-router-dom";
import DropDown from "../navbar/DropDown";

const Navbar = () => {
  return (
    <nav className="w-full h-[5rem] z-10 bg-background sticky top-0 border-b">
      <div className="max-w-7xl w-full mx-auto flex justify-between items-center h-full p-5 2xl:p-0">
        <Link to={"/"}>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">E-commerce</h1>
            <p className="text-muted-foreground text-sm">admin panel</p>
          </div>
        </Link>
        <div>
          <DropDown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
