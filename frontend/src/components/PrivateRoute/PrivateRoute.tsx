import React from "react";
import { Navigate, Outlet } from "react-router-dom";

type PrivateRouteProps = {
  isLoading: boolean;
};
export const PrivateRoute: React.FC<PrivateRouteProps> = ({ isLoading }) => {
  if (!isLoading) {
    return <Navigate to="/connexion" replace />;
  }

  return <Outlet />;
};
