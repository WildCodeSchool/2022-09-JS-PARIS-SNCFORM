import React, { useEffect, useState } from "react";
import "./ProfileBar.scss";
import { Outlet, Link, useOutletContext } from "react-router-dom";
import { LearningType, UserType } from "@type/index";
import { learningFetch, userFetch } from "@services/index";
import { tokenApp } from "@tools/utils";

export type OutletProfilContextType = {
  user: UserType;
  userLearnings: LearningType[];
};

export const useProfilContext = () => {
  return useOutletContext<OutletProfilContextType>();
};

export const ProfileBar: React.FC = () => {
  const [user, setUser] = useState<UserType | null>(null);
  const [userLearnings, setUserLearnings] = useState<
    Partial<LearningType>[] | null
  >(null);

  useEffect(() => {
    const { id } = tokenApp();
    if (id) {
      userFetch.getUserProfilById(id, setUser);
      learningFetch.fetchUserLearnings(id, setUserLearnings);
    }
  }, []);

  return (
    <div className="profile-bar">
      <ul className="profile-bar__items-list">
        <li className="items-list items-list--profile">
          <Link to="/profile">Mon Profil</Link>
        </li>
        <li className="items-list items-list--edit-profile">
          <Link to="/editprofile">Editer Profil</Link>
        </li>
        <li className="items-list items-list--learning">
          <Link to="/learning-profile">Mes formations</Link>
        </li>
      </ul>
      <Outlet context={{ user, userLearnings }} />
    </div>
  );
};
