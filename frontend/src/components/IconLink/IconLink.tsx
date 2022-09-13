import React from "react";
import "./IconLink.scss";
import {NavLink} from "react-router-dom";

type IconLinkProps = {
  icon: string;
  title: string;
  iconAlt: string;
  iconUrl: string;
};

export const IconLink: React.FC<IconLinkProps> = ({ icon, iconAlt, title, iconUrl }) => {
  return (
    <div className="iconlink">
      <img src={icon} alt={iconAlt} />
      <h3>{title}</h3>
    </div>
  );
};
