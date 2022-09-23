import React from "react";
import { Navigate, Outlet } from "react-router-dom";

type PrivateRouteProps = {
  isAuth: boolean;
  isConnected?: boolean;
};
export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  isAuth,
  isConnected,
}) => {
  if (!isAuth && isConnected) {
    return <Navigate to="/connexion" />;
  }

  if (!isAuth) {
    return <Navigate to="/menu" />;
  }

  return <Outlet />;
};
