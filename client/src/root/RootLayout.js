"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MenuBar_1 = __importDefault(require("@/components/shared/MenuBar"));
const Navbar_1 = __importDefault(require("@/components/shared/Navbar"));
const react_router_dom_1 = require("react-router-dom");
const RootLayout = () => {
    return (<main className="min-h-screen">
      <Navbar_1.default />
      <div className="flex">
        <MenuBar_1.default className="fixed bg-background  text-sm h-full  top-[5rem] p-5 hidden gap-1 sm:flex flex-col lg:w-72"/>
        <react_router_dom_1.Outlet />
      </div>
      <MenuBar_1.default className="fixed bg-background bottom-0 flex w-full justify-center gap-5 py-3 sm:hidden"/>
    </main>);
};
exports.default = RootLayout;
