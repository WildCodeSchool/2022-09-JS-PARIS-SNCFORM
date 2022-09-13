import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.scss";

export const Layout = () => {
  return (
    <div className="layout">
      <img
        src="src/assets/images/logo-sncf.png"
        alt="Logo d'entreprise"
        className="layout__logo"
      />
      <Outlet />
    </div>
  );
};
