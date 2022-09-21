import React from "react";
import { NavLink } from "react-router-dom";
import { IconLink } from "@components/IconLink/IconLink";
import "./MenuPage.scss";
import { HatIcon } from "@assets/images/SvgComponent/HatIcon";
import { ProfilIcon } from "@assets/images/SvgComponent/ProfilIcon";
import { NotificationIcon } from "@assets/images/SvgComponent/NotificationIcon";
import { DeconnexionIcon } from "@assets/images/SvgComponent/DeconnexionIcon";

export const MenuPage: React.FC = () => {
  const iconStyles = {
    width: "5em",
    height: "5em",
  };

  return (
    <div className="menu-page">
      <IconLink
        title="Formations"
        iconComponent={<HatIcon />}
        path="/formations"
        styles={iconStyles}
      />
      <IconLink
        title="Profil"
        iconComponent={<ProfilIcon />}
        path="/profile"
        styles={iconStyles}
      />
      <IconLink
        title="Notifications"
        iconComponent={<NotificationIcon />}
        path="########"
        styles={iconStyles}
      />
      <div className="menu-page__deconnexion">
        <IconLink
          title="Déconnexion"
          iconComponent={<DeconnexionIcon />}
          path="########"
        />
      </div>
    </div>
  );
};
