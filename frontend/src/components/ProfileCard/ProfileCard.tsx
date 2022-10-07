import { UserType } from "@type/index";
import React from "react";
import { RoundCard } from "../index";
import "./ProfileCard.scss";

type ProfileCardProps = {
  user: UserType;
};

export const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  const {
    first_name: firstName,
    last_name: lastName,
    bio,
    job_type_name: jobName,
    avatar,
    background_profil: backgroundProfil,
    genre,
    job_type_id: jobTypeId,
  } = user;

  const userGenre = genre === "Homme" ? 1 : 2;
  let avatarDefault = `./assets/images/avatar-${userGenre}-${jobTypeId}.png`;
  if (avatar) avatarDefault = `http://localhost:5000${avatar as string}`;
  let backgroundProfilDefault = `./assets/images/backP-${jobTypeId}.png`;
  if (backgroundProfil)
    backgroundProfilDefault = `http://localhost:5000${
      backgroundProfil as string
    }`;

  return (
    <div className="profile-card">
      <div className="profile-card__background-img">
        <img src={backgroundProfilDefault} alt="backgroundProfilImage" />
      </div>
      <div className="profile-card__avatar-id-container">
        <RoundCard imgUrl={avatarDefault} label="" />
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
