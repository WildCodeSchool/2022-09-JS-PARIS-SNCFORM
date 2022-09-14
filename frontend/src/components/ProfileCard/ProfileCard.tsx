import React from "react";

export const ProfileCard: React.FC = () => {
  return (
    <div className="profile-card">
      <div className="profile-card__background-container">
        <img
          src="src/assets/images/profile-card__background-img.jpg"
          alt="background-img"
          className="profile-card__background-img"
        />
      </div>

      <div className="profile-card__avatar-container">
        <img
          src="src/assets/images/profile-card__avatar-img.jpg"
          alt="user-img"
          className="profile-card__avatar-img"
        />
      </div>

      <div className="profile-card__user-id">
        <p className="user-id__name"> John Smith </p>
        <p className="user-id__job"> Agent commercial </p>
        <p className="user-id__bio"> Lorem Ipsum </p>
      </div>
    </div>
  );
};
