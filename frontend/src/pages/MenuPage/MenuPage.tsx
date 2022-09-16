import React from "react";
import { IconLink } from "../../components/IconLink/IconLink";
import "./MenuPage.scss";

export const MenuPage: React.FC = () => {
  return (
    <div className="menu-page">
      <IconLink
        title="Formations"
        iconAlt="Icon de Formations"
        icon="src\assets\images\iconFormation.jpg"
        iconPage="########"
      />
      <IconLink
        title="Profil"
        iconAlt="Icon de Profil"
        icon="src\assets\images\iconProfil.jpg"
        iconPage="########"
      />
      <IconLink
        title="Notifications"
        iconAlt="Icon de Notifications"
        icon="src\assets\images\iconNotif.png"
        iconPage="########"
      />
    </div>
  );
};
