import React from "react";
import { NavLink } from "react-router-dom";
import "./IconLink.scss";

type IconLinkProps = {
  iconComponent: JSX.Element | JSX.Element[];
  title?: string;
  path: string;
  styles?: { [key: string]: string };
  className?: string;
};

export const IconLink: React.FC<IconLinkProps> = ({
  iconComponent,
  title,
  path,
  styles,
  className,
}) => {
  return (
    <div className={`${className} iconlink`} style={{ ...styles }}>
      <NavLink to={path}>
        {iconComponent}
        {title && <h3>{title}</h3>}
      </NavLink>
    </div>
  );
};

/* Associer iconlink a une URL qui amène a la page concerné :
iconFormations => PageFormations
iconProfil => PageProfil
iconNotif => PageNotifications 
et à appliquer sur le compaosant de "base", structure, soit IconLink */
