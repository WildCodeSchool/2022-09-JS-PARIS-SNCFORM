import React from "react";
import "./ProfileCard.scss";

export const ProfileCard: React.FC = () => {
  return (
    <div className="profile-card">
      <div className="profile-card__background-img" />
      <div className="profile-card__avatar-id-container">
        <img
          src="src/assets/images/profile-card__avatar-img.jpg"
          alt="user-img"
          className="profile-card__avatar-img"
        />
        <div>
          <p className="profile-card__name"> John - Doe </p>
          <p> Agent commercial </p>
        </div>
      </div>
      <div className="profile-card__bio-container">
        <p className="profile-card__bio">
          Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
          IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
          IpsumLorem IpsumLorem Ipsum
        </p>
      </div>
    </div>
  );
};
