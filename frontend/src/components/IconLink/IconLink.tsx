import React from "react";
import { NavLink } from "react-router-dom";
import "./IconLink.scss";

type IconLinkProps = {
  iconComponent: JSX.Element | JSX.Element[];
  title: string;
  // iconAlt: string;
  iconPage: string;
};

export const IconLink: React.FC<IconLinkProps> = ({
  iconComponent,
  // iconAlt,
  title,
  iconPage,
}) => {
  return (
    <NavLink to={iconPage}>
      <div className="iconlink">
        {iconComponent}
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
