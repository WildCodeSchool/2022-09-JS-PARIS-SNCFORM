import React from "react";
import "./ProfilBar.scss";

export const ProfilBar: React.FC = () => {
  return (
    <div className="profil-bar">
      <ul className="profil-bar__items-list">
        <li className="profil-bar__items-list--mon-profil">Mon profil</li>
        <li className="profil-bar__items-list--editer-profil">Editer profil</li>
        <li className="profil-bar__items-list--mes-formations">
          Mes formations
        </li>
      </ul>
    </div>
  );
};
