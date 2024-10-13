import { Home, ShoppingCart, Package, Users, CirclePlus } from "lucide-react";

export const navLinks = [
  {
    name: "Dashboard",
    icon: Home,
    link: "/",
  },
  {
    name: "Products",
    icon: Package,
    link: "/products",
  },
  {
    name: "Orders",
    icon: ShoppingCart,
    link: "/orders",
  },
  {
    name: "Customers",
    icon: Users,
    link: "/customers",
  },
  {
    name: "Add product",
    icon: CirclePlus,
    link: "/create-product",
  },
];
