"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const client_1 = require("react-dom/client");
require("./index.css");
const react_router_dom_1 = require("react-router-dom");
const index_tsx_1 = require("./routing/index.tsx");
(0, client_1.createRoot)(document.getElementById("root")).render(<react_1.StrictMode>
    <react_router_dom_1.RouterProvider router={index_tsx_1.router}/>
  </react_1.StrictMode>);
