import React from "react";
import "./ProfileBar.scss";
import { Outlet } from "react-router-dom";

export const ProfileBar: React.FC = () => {
  return (
    <div className="profile-bar">
      <ul className="profile-bar__items-list">
        <li className="items-list__profile">Mon Profil</li>
        <li className="items-list__edit-profile">Editer Profil</li>
        <li className="items-list__learning">Mes formations</li>
      </ul>
      <Outlet />
    </div>
  );
};
