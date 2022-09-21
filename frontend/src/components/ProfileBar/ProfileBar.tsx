import React from "react";
import "./ProfileBar.scss";

export const ProfileBar: React.FC = () => {
  return (
    <div className="profile-bar">
      <ul className="profile-bar__items-list">
        <li className="items-list__profile">Mon Profil</li>
        <li className="items-list__edit-profile">Editer Profil</li>
        <li className="items-list__leaning">Mes formations</li>
      </ul>
    </div>
  );
};
