import {
  Home,
  ShoppingCart,
  Package,
  Users,
  CirclePlus,
  LucideProps,
} from "lucide-react";
import { SectionName } from "./types";

type NavLink = {
  name: SectionName;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  link: string;
};

export const navLinks: NavLink[] = [
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
