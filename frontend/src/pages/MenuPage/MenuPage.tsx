import React from "react";
import { IconLink } from "@components/IconLink/IconLink";
import "./MenuPage.scss";
import { HatIcon } from "@assets/images/SvgComponent/HatIcon";
import { ProfilIcon } from "@assets/images/SvgComponent/ProfilIcon";
import { NotificationIcon } from "@assets/images/SvgComponent/NotificationIcon";
import { DeconnexionIcon } from "@assets/images/SvgComponent/DeconnexionIcon";

export const MenuPage: React.FC = () => {
  return (
    <div className="menu-page">
      <div className="menu-page__formation">
        <IconLink
          title="Formations"
          iconComponent={<HatIcon />}
          iconPage="########"
        />
      </div>
      <div className="menu-page__profil">
        <IconLink
          title="Profil"
          iconComponent={<ProfilIcon />}
          iconPage="########"
        />
      </div>
      <div className="menu-page__notification">
        <IconLink
          title="Notifications"
          iconComponent={<NotificationIcon />}
          iconPage="########"
        />
      </div>
      <div className="menu-page__deconnexion">
        <IconLink
          title="Déconnexion"
          iconComponent={<DeconnexionIcon />}
          iconPage="########"
        />
      </div>
    </div>
  );
};
