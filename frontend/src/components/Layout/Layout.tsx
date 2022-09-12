import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.scss";

export const Layout = () => {
  return (
    <div>
      <img
        src="src/assets/images/logo-sncf.png"
        alt="Logo d'entreprise"
        className="header-logo"
      />
      <Outlet />
    </div>
  );
};
