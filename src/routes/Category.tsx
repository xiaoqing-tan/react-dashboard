import { RouteProps } from '../core';

import List from "../views/category/List";
import Create from "../views/category/Create";
import Edit from "../views/category/Edit";
import View from "../views/category/View";

import CreateIcon from "@mui/icons-material/Add";
import ViewIcon from "@mui/icons-material/Pageview";
import ListIcon from "@mui/icons-material/List";
import EditIcon from "@mui/icons-material/Edit";
import ProductIcon from '@mui/icons-material/ProductionQuantityLimits';

const routes: RouteProps = {
  name: "Category",
  path: "category",
  icon: <ProductIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
  children: [
    {
      index: true,
      name: "Category List",
      icon: <ListIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      element: <List />,
    },
    {
      path: "create",
      name: "Category Create",
      icon: <CreateIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      element: <Create />,
      needAuth: true
    },
    {
      path: "edit",
      name: "Category Edit",
      icon: <EditIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      element: <Edit />,
    },
    {
      path: "view",
      name: "Category View",
      icon: <ViewIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      element: <View />,
    },
  ],
}

export default routes;
