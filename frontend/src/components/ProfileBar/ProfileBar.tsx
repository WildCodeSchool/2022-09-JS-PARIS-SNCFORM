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
        <Link to="/profile">
          <li className="items-list__profile">Mon Profil</li>
        </Link>
        <Link to="/editprofile">
          <li className="items-list__edit-profile">Editer Profil</li>
        </Link>
        <li className="items-list__learning">Mes formations</li>
      </ul>
      <Outlet context={{ user, userLearnings }} />
    </div>
  );
};
