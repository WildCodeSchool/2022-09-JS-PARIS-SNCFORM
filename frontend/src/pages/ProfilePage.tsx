import React from "react";
import { ProfileBar } from "@components/ProfileBar/ProfileBar";
import { ProfileCard } from "@components/ProfileCard/ProfileCard";
import "./ProfilePage.scss";

export const ProfilePage: React.FC = () => {
  return (
    <div className="profile-page">
      <ProfileBar />
      <ProfileCard />
    </div>
  );
};
