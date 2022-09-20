import React from "react";
import { IconLink } from "../../components/IconLink/IconLink";
import "./MenuPage.scss";

export const MenuPage: React.FC = () => {
  const iconStyles = {
    width: "5em",
    height: "5em",
  };

  return (
    <div className="menu-page">
      <IconLink
        title="Formations"
        iconAlt="Icon de Formations"
        icon="src\assets\images\iconFormation.jpg"
        path="/formations"
        styles={iconStyles}
      />
      <IconLink
        title="Profil"
        iconAlt="Icon de Profil"
        icon="src\assets\images\iconProfil.jpg"
        path="########"
        styles={iconStyles}
      />
      <IconLink
        title="Notifications"
        iconAlt="Icon de Notifications"
        icon="src\assets\images\iconNotif.png"
        path="########"
        styles={iconStyles}
      />
    </div>
  );
};
