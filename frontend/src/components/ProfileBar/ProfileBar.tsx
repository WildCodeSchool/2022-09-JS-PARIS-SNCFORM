import React from "react";
import "./ProfileBar.scss";

export const ProfileBar: React.FC = () => {
  return (
    <div className="profile-bar">
      <ul className="profile-bar__items-list">
        <li className="profile-bar__items-list--mon-profile">Mon Profil</li>
        <li className="profile-bar__items-list--editer-profile">
          Editer Profil
        </li>
        <li className="profile-bar__items-list--mes-formations">
          Mes formations
        </li>
      </ul>
    </div>
  );
};
