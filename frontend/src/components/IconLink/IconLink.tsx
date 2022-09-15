import React from "react";
import { NavLink } from "react-router-dom";
import "./IconLink.scss";

type IconLinkProps = {
  icon: string;
  title: string;
  iconAlt: string;
  iconPage: string;
};

export const IconLink: React.FC<IconLinkProps> = ({
  icon,
  iconAlt,
  title,
  iconPage,
}) => {
  return (
    <NavLink to={iconPage}>
      <div className="iconlink">
        <img src={icon} alt={iconAlt} />
        <h3>{title}</h3>
      </div>
    </NavLink>
  );
};

/* Associer iconlink a une URL qui amène a la page concerné :
iconFormations => PageFormations
iconProfil => PageProfil
iconNotif => PageNotifications 
et à appliquer sur le compaosant de "base", structure, soit IconLink */
