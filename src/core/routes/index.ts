import React from "react";
import { RouteProps } from "../types";

export const RouterContext = React.createContext<RouteProps[]>(
  [] as RouteProps[]
);
RouterContext.displayName = "RouterContext";

export * from "./RoutesComponent";
