import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import { RouterContext } from "../routes";
import { RouteProps } from "../types";
import { useCheckAuth } from "../auth";

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ 
  showSpinner: false, 
  easing: 'ease', 
  speed: 200,
});

export const RequireAuth = ({
  children,
  needAuth,
}: {
  children: React.ReactNode;
  needAuth: boolean;
}) => {
  const location = useLocation();
  const checkAuth = useCheckAuth();
  const user: any = checkAuth(1);

  if (!user && needAuth) {
    return <Navigate to="/login" replace state={{ path: location.pathname }} />;
  } else {
    return <>{children}</>;
  }
};

export const RoutesComponent = () => {
  const routes = React.useContext<RouteProps[]>(RouterContext);
  const { pathname } = useLocation();

  useEffect(() => {
    NProgress.done();
    return () => NProgress.start();
  }, [pathname]);
  
  const routesCreator = (routes: RouteProps[]) => {
    return routes.map((item: RouteProps) => {
      const {
        path,
        name,
        element,
        index = false,
        children = [],
        needAuth = false,
      } = item;
      const hasChildren = !!children.length;
      return hasChildren ? (
        <Route index={index} key={name} path={path} element={element}>
          {routesCreator(children)}
        </Route>
      ) : (
        <Route
          index={index}
          key={name}
          path={path}
          element={<RequireAuth needAuth={needAuth}>{element}</RequireAuth>}
        />
      );
    });
  };

  return <Routes> {routesCreator(routes)} </Routes>;
};
