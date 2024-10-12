import AuthLayout from "@/pages/auth/AuthLayout";
import LoginPage from "@/pages/auth/login/LoginPage";
import RegisterPage from "@/pages/auth/register/RegisterPage";
import HomePage from "@/pages/root/home/HomePage";
import RootLayout from "@/pages/root/RootLayout";
import { createBrowserRouter } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
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
