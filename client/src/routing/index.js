"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const react_router_dom_1 = require("react-router-dom");
const RootLayout_1 = __importDefault(require("../root/RootLayout"));
const ProductsPage_1 = __importDefault(require("@/root/products/ProductsPage"));
exports.router = (0, react_router_dom_1.createBrowserRouter)([
    {
        path: "/",
        element: <RootLayout_1.default />,
        children: [
            {
                index: true,
                element: <ProductsPage_1.default />,
            },
        ],
    },
]);
