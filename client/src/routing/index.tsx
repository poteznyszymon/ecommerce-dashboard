import AuthLayout from "@/pages/auth/AuthLayout";
import LoginPage from "@/pages/auth/login/LoginPage";
import RegisterPage from "@/pages/auth/register/RegisterPage";
import RootLayout from "@/pages/root/RootLayout";
import { createBrowserRouter } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import DashboardPage from "@/pages/root/dashboard/DashboardPage";
import ProductsPage from "@/pages/root/products/ProductsPage";
import OrdersPage from "@/pages/root/orders/OrdersPage";
import CustomersPage from "@/pages/root/customers/CustomersPage";
import CreateProductPage from "@/pages/root/create-product/CreateProductPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoutes />,
    children: [
      {
        element: <RootLayout />,
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
          {
            path: "products",
            element: <ProductsPage />,
          },
          {
            path: "orders",
            element: <OrdersPage />,
          },
          {
            path: "customers",
            element: <CustomersPage />,
          },
          {
            path: "create-product",
            element: <CreateProductPage />,
          },
        ],
      },
    ],
  },
  {
    element: <PublicRoutes />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            element: <LoginPage />,
          },
          {
            path: "register",
            element: <RegisterPage />,
          },
        ],
      },
    ],
  },
]);
