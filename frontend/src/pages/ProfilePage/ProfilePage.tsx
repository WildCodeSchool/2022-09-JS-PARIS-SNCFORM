import React from "react";
import {
  ProfileCard,
  LearningCard,
  IconLink,
  useProfilContext,
} from "@components/index";
import { HomeIcon } from "@assets/images/SvgComponent/HomeIcon";
import "./ProfilePage.scss";
import { learningsByStatus } from "@tools/index";
import { useUserContext } from "@context/index";

export const ProfilePage: React.FC = () => {
  const { userLearnings } = useProfilContext();
  const { user } = useUserContext();

  const userLearningsCompleted = learningsByStatus(userLearnings, "completed");

  return (
    <div className="profile-page">
      <IconLink
        iconComponent={<HomeIcon />}
        path="/menu"
        className="icon-top-right"
      />

      {user && <ProfileCard user={user} />}
      <LearningCard
        cardTitle="Formation complétées"
        items={userLearningsCompleted}
      />
    </div>
  );
};
