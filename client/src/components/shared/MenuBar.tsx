import { Link } from "react-router-dom";
import { Archive, ArchiveRestore, ShoppingCart, User } from "lucide-react";

interface MenuBarProps {
  className?: string;
}

const MenuBar = ({ className }: MenuBarProps) => {
  const activeSection: string = "products";

  return (
    <div className={className}>
      <Link to={"/"}>
        <div
          className={`flex items-center gap-2 rounded-md p-3 ${
            activeSection === "products"
              ? "bg-foreground text-background"
              : "text-muted-foreground bg-background hover:bg-foreground/10"
          }`}
        >
          <Archive strokeWidth={1.2} className="" />
          <p className="hidden lg:inline font-normal">Products</p>
        </div>
      </Link>
      <Link to={"/add"}>
        <div
          className={`flex items-center gap-2 rounded-md p-3 ${
            activeSection === "add-product"
              ? "bg-foreground text-background"
              : "text-muted-foreground bg-background hover:bg-foreground/10"
          }`}
        >
          <ArchiveRestore strokeWidth={1.2} className="" />
          <p className="hidden lg:inline font-normal">Add product</p>
        </div>
      </Link>
      <Link to={"/orders"}>
        <div
          className={`flex items-center gap-2 rounded-md p-3 ${
            activeSection === "add-product"
              ? "bg-foreground text-background"
              : "text-muted-foreground bg-background hover:bg-foreground/10"
          }`}
        >
          <ShoppingCart strokeWidth={1.2} className="" />
          <p className="hidden lg:inline font-normal">Orders</p>
        </div>
      </Link>
      <Link to={"/users"}>
        <div
          className={`flex items-center gap-2 rounded-md p-3 ${
            activeSection === "add-product"
              ? "bg-foreground text-background"
              : "text-muted-foreground bg-background hover:bg-foreground/10"
          }`}
        >
          <User strokeWidth={1.2} className="" />
          <p className="hidden lg:inline font-normal">Users</p>
        </div>
      </Link>
    </div>
  );
};

export default MenuBar;
