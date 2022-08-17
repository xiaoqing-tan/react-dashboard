import { RouteProps } from '../core';

import List from "../views/product/List";
import Create from "../views/product/Create";
import Edit from "../views/product/Edit";
import View from "../views/product/View";

import CreateIcon from "@mui/icons-material/Add";
import ViewIcon from "@mui/icons-material/Pageview";
import ListIcon from "@mui/icons-material/List";
import EditIcon from "@mui/icons-material/Edit";
import ProductIcon from '@mui/icons-material/ProductionQuantityLimits';

const routes: RouteProps = {
  name: "Product",
  path: "product",
  icon: <ProductIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
  children: [
    {
      index: true,
      name: "List",
      icon: <ListIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      element: <List />,
    },
    {
      path: "create",
      name: "Create",
      icon: <CreateIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      element: <Create />,
      needAuth: true,
    },
    {
      path: "edit",
      name: "Edit",
      icon: <EditIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      element: <Edit />,
    },
    {
      path: "view",
      name: "View",
      icon: <ViewIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
      element: <View />,
    },
  ],
}

export default routes;
