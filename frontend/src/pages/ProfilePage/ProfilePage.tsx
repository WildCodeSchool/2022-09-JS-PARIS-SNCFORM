import React from "react";
import { ProfileCard } from "@components/ProfileCard/ProfileCard";
import { LearningCard } from "@components/LearningCard/LearningCard";
import "./ProfilePage.scss";

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
      <ProfileCard />
      <LearningCard title="Formation complétées" items={itemsCompleted} />
    </div>
  );
};
