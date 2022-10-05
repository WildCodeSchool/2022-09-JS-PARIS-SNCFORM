import { UserType } from "@type/index";
import React from "react";
import { RoundCard } from "../index";
import "./ProfileCard.scss";

type ProfileCardProps = {
  user: UserType;
};

export const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  console.warn("$$$$$$$", `http://localhost:5000/${user.avatar}`);
  console.warn("&&&&&&&", user);
  const {
    first_name: firstName,
    last_name: lastName,
    bio,
    job_type_name: jobName,
    avatar,
  } = user;
  return (
    <div className="profile-card">
      <div className="profile-card__background-img" />
      <div className="profile-card__avatar-id-container">
        <RoundCard
          imgUrl={`http://localhost:5000/${avatar as string}`}
          label=""
        />
        <div className="profile-card__name-job">
          <p className="profile-card__name">{`${firstName} - ${lastName}`}</p>
          <p>{jobName}</p>
        </div>
      </div>
      <div className="profile-card__bio-container">
        <p className="profile-card__bio">{bio || "Bio pas renseignée "}</p>
      </div>
    </div>
  );
};
