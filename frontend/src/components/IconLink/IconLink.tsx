import React from "react";
import { NavLink } from "react-router-dom";
import "./IconLink.scss";

type IconLinkProps = {
  icon: string;
  title?: string;
  iconAlt: string;
  path: string;
  styles?: { [key: string]: string };
};

export const IconLink: React.FC<IconLinkProps> = ({
  icon,
  iconAlt,
  title,
  path,
  styles,
}) => {
  return (
    <NavLink to={path} style={{ ...styles }}>
      <div className="iconlink">
        <img src={icon} alt={iconAlt} />
        {title && <h3>{title}</h3>}
      </div>
    </NavLink>
  );
};

/* Associer iconlink a une URL qui amène a la page concerné :
iconFormations => PageFormations
iconProfil => PageProfil
iconNotif => PageNotifications 
et à appliquer sur le compaosant de "base", structure, soit IconLink */
