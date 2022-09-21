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
