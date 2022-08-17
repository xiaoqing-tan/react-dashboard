import Layout from "./../views/layout/Layout";
import Home from "./../views/Index";
import Configuration from "./../views/Configuration";
import ProductRoutes from "./Product";
import CategoryRoutes from "./Category";
import Login from "./../views/auth/Login";
import NotFound from "./../views/layout/NotFound";

import HomeIcon from "@mui/icons-material/Home";
import ConfigurationIcon from "@mui/icons-material/SettingsOutlined";

import type { RouteProps } from "../core";

export const routes: RouteProps[] = [
  {
    path: "/",
    name: "Home",
    icon: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
    element: <Layout />,
    children: [
      {
        index: true,
        name: "Home",
        icon: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
        element: <Home />,
      },
      ProductRoutes,
      // CategoryRoutes,
      {
        path: "configuration",
        icon: <ConfigurationIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
        name: "Configuration",
        element: <Configuration />,
      },
    ],
  },
  {
    path: "login",
    name: "Login",
    element: <Login />,
  },
  {
    path: "*",
    name: "NotFound",
    element: <NotFound />,
  },
];