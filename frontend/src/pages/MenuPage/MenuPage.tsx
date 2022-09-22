import React from "react";
import { IconLink } from "@components/IconLink/IconLink";
import "./MenuPage.scss";
import { HatIcon } from "@assets/images/SvgComponent/HatIcon";
import { ProfilIcon } from "@assets/images/SvgComponent/ProfilIcon";
import { NotificationIcon } from "@assets/images/SvgComponent/NotificationIcon";
import { DeconnexionIcon } from "@assets/images/SvgComponent/DeconnexionIcon";
import { authFetch } from "@services/index";
import { useNavigate } from "react-router-dom";

export const MenuPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    authFetch.logout(navigate);
  };

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
        <button type="button" onClick={handleSubmit}>
          <DeconnexionIcon />
        </button>
      </div>
    </div>
  );
};
