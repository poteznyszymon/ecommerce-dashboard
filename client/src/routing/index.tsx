import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../root/RootLayout";
import ProductsPage from "@/root/products/ProductsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <ProductsPage />,
      },
    ],
  },
]);
