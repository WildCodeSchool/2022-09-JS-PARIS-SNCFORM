import React from "react";
// import { NavLink } from "react-router-dom";
import { IconLink } from "../../components/IconLink/IconLink";

export const MenuPage: React.FC = () => {
  return (
    <div className="menu-page">
      <IconLink
        title="Formations"
        iconAlt="Icon de Formations"
        icon="src\assets\images\iconFormation.jpg"
      />
      <IconLink
        title="Profil"
        iconAlt="Icon de Profil"
        icon="src\assets\images\iconProfil.jpg"
      />
      <IconLink
        title="Notifications"
        iconAlt="Icon de Notifications"
        icon="src\assets\images\iconNotif.png"
      />
    </div>
  );
};
