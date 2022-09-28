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
  if (!isAuth) {
    if (isConnected) return <Navigate to="/connexion" />;
    return <Navigate to="/menu" />;
  }
  return <Outlet />;
};
