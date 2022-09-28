import React from "react";
import { IconLink } from "@components/IconLink/IconLink";
import "./MenuPage.scss";
import {
  DeconnexionIcon,
  NotificationIcon,
  ProfilIcon,
  HatIcon,
} from "@assets/index";
import { authFetch } from "@services/index";
import { useNavigate } from "react-router-dom";

export const MenuPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    authFetch.logout(navigate);
  };

  const iconStyles = {
    width: "5em",
    height: "5em",
  };

  return (
    <div className="menu-page">
      <div className="menu-page__formation">
        <IconLink
          title="Formations"
          iconComponent={<HatIcon />}
          path="/formations"
          styles={iconStyles}
        />
      </div>
      <div className="menu-page__profil">
        <IconLink
          title="Profil"
          iconComponent={<ProfilIcon />}
          path="/profile"
          styles={iconStyles}
        />
      </div>
      <div className="menu-page__notification">
        <IconLink
          title="Notifications"
          iconComponent={<NotificationIcon />}
          path="########"
          styles={iconStyles}
        />
      </div>
      <IconLink
        className="icon-top-right"
        iconComponent={<DeconnexionIcon onClick={handleSubmit} />}
        path="#"
      />
    </div>
  );
};
