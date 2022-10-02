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

  return (
    <div className="menu-page">
      <IconLink
        className="icon-top-right"
        iconComponent={<DeconnexionIcon onClick={handleSubmit} />}
        path="#"
      />
      <div className="menu-page__formation">
        <IconLink
          title="Formations"
          iconComponent={<HatIcon />}
          path="/formations"
          className="menu-page__iconlink"
        />
      </div>
      <div className="menu-page__profil">
        <IconLink
          title="Profil"
          iconComponent={<ProfilIcon />}
          path="/profile"
          className="menu-page__iconlink"
        />
      </div>
      <div className="menu-page__notification">
        <IconLink
          title="Notifications"
          iconComponent={<NotificationIcon />}
          path="########"
          className="menu-page__iconlink"
        />
      </div>
    </div>
  );
};
