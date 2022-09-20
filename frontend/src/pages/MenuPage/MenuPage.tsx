import React from "react";
import { NavLink } from "react-router-dom";
import { IconLink } from "../../components/IconLink/IconLink";
import "./MenuPage.scss";

export const MenuPage: React.FC = () => {
  return (
    <div className="menu-page">
      <div className="menu-page-formation">
        <IconLink
          title="Formations"
          iconAlt="Icon de Formations"
          icon="src\assets\images\iconFormation.jpg"
          iconPage="########"
        />
      </div>
      <div className="menu-page-profil">
        <IconLink
          title="Profil"
          iconAlt="Icon de Profil"
          icon="src\assets\images\iconProfil.jpg"
          iconPage="########"
        />
      </div>
      <div className="menu-page-notification">
        <IconLink
          title="Notifications"
          iconAlt="Icon de Notifications"
          icon="src\assets\images\iconNotif.png"
          iconPage="########"
        />
      </div>
      <div className="menu-page-header">
        <NavLink to="######">
          {/* pour le lien navlink to= ajouter le composant logout {Logout} */}
          <img
            src="src\assets\images\deconnexion.png"
            alt="Icon de Déconnection"
          />
        </NavLink>
      </div>
    </div>
  );
};
