import React from "react";
import "./IconLink.scss";

type IconLinkProps = {
  icon: string;
  title: string;
  iconAlt: string;
};

export const IconLink: React.FC<IconLinkProps> = ({ icon, iconAlt, title }) => {
  return (
    <div className="iconlink">
      <img src={icon} alt={iconAlt} />
      <h3>{title}</h3>
    </div>
  );
};
