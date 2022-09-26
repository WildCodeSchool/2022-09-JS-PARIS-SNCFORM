import React from "react";
import { ProfileBar } from "@components/ProfileBar/ProfileBar";
import { ProfileCard } from "@components/ProfileCard/ProfileCard";
import { LearningCard } from "@components/LearningCard/LearningCard";
import "./ProfilePage.scss";
import { IconLink } from "@components/index";
import { HomeIcon } from "@assets/index";

export const ProfilePage: React.FC = () => {
  // Array of images
  const itemsCompleted = [
    {
      image: "src/assets/images/learning-card__img-cybersecurity.jpg",
      alt: "cybersecurity",
    },
    {
      image: "src/assets/images/learning-card__img-gun.jpg",
      alt: "gun",
    },
    {
      image: "src/assets/images/learning-card__img-railway.jpg",
      alt: "railway",
    },
    {
      image: "src/assets/images/learning-card__img-train.jpg",
      alt: "train",
    },
    {
      image: "src/assets/images/learning-card__img-whiteboard.jpg",
      alt: "whiteboard",
    },
  ];
  return (
    <div className="profile-page">
      <IconLink
        iconComponent={<HomeIcon />}
        path="/menu"
        className="icon-top-right"
      />
      <ProfileBar />
      <ProfileCard />
      <LearningCard title="Formation complétées" items={itemsCompleted} />
    </div>
  );
};
