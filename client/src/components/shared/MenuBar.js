"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const lucide_react_1 = require("lucide-react");
const MenuBar = ({ className }) => {
    const activeSection = "products";
    return (<div className={className}>
      <react_router_dom_1.Link to={"/"}>
        <div className={`flex items-center gap-2 rounded-md p-3 ${activeSection === "products"
            ? "bg-foreground text-background"
            : "text-muted-foreground bg-background hover:bg-foreground/10"}`}>
          <lucide_react_1.Archive strokeWidth={1.2} className=""/>
          <p className="hidden lg:inline font-normal">Products</p>
        </div>
      </react_router_dom_1.Link>
      <react_router_dom_1.Link to={"/add"}>
        <div className={`flex items-center gap-2 rounded-md p-3 ${activeSection === "add-product"
            ? "bg-foreground text-background"
            : "text-muted-foreground bg-background hover:bg-foreground/10"}`}>
          <lucide_react_1.ArchiveRestore strokeWidth={1.2} className=""/>
          <p className="hidden lg:inline font-normal">Add product</p>
        </div>
      </react_router_dom_1.Link>
      <react_router_dom_1.Link to={"/orders"}>
        <div className={`flex items-center gap-2 rounded-md p-3 ${activeSection === "add-product"
            ? "bg-foreground text-background"
            : "text-muted-foreground bg-background hover:bg-foreground/10"}`}>
          <lucide_react_1.ShoppingCart strokeWidth={1.2} className=""/>
          <p className="hidden lg:inline font-normal">Orders</p>
        </div>
      </react_router_dom_1.Link>
      <react_router_dom_1.Link to={"/users"}>
        <div className={`flex items-center gap-2 rounded-md p-3 ${activeSection === "add-product"
            ? "bg-foreground text-background"
            : "text-muted-foreground bg-background hover:bg-foreground/10"}`}>
          <lucide_react_1.User strokeWidth={1.2} className=""/>
          <p className="hidden lg:inline font-normal">Users</p>
        </div>
      </react_router_dom_1.Link>
    </div>);
};
exports.default = MenuBar;
