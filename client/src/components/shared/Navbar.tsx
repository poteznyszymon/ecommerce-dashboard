import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-[5rem] flex items-center px-5 bg-background justify-between sticky top-0">
      <Link to={"/"}>
        <div className="flex flex-col justify-center">
          <h1 className="font-integral text-2xl font-semibold">SHOP.ER</h1>
          <p className="text-muted-foreground">Admin panel</p>
        </div>
      </Link>
      <div className="flex items-center gap-5">
        <button className="bg-foreground text-background px-5 py-2 rounded-md hover:bg-foreground/80 text-sm">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
