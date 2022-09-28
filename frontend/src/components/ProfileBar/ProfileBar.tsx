import React from "react";
import "./ProfileBar.scss";
import { Outlet, Link } from "react-router-dom";

export const ProfileBar: React.FC = () => {
  return (
    <>
      <div className="profile-bar">
        <ul className="profile-bar__items-list">
          <Link to="/profile">
            <li className="items-list__profile">Mon Profil</li>
          </Link>
          <Link to="/editprofile">
            <li className="items-list__edit-profile">Editer Profil</li>
          </Link>
          <li className="items-list__learning">Mes formations</li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};
