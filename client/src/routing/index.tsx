import AuthLayout from "@/auth/AuthLayout";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <ProductsPage />,
      },
    ],
  },
]);
