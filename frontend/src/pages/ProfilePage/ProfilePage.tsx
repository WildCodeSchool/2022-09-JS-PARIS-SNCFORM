import React, { useEffect, useState } from "react";
import { ProfileCard, LearningCard, IconLink } from "@components/index";
import { HomeIcon } from "@assets/images/SvgComponent/HomeIcon";
import "./ProfilePage.scss";
import { tokenApp } from "@tools/utils";
import { learningFetch, userFetch } from "@services/index";
import { LearningType, UserType } from "@type/index";

export const ProfilePage: React.FC = () => {
  const { id } = tokenApp();
  const [user, setUser] = useState<UserType | null>(null);
  const [userLearnings, setUserLearnings] = useState<
    Partial<LearningType>[] | null
  >(null);

  const learningsByStatus = (
    learnings: Partial<LearningType>[] | null,
    status: string
  ) => {
    return learnings?.filter((learning) => learning.status === status);
  };

  const userLearningsCompleted = learningsByStatus(userLearnings, "completed");
  console.warn("userLearningsCompleted:", userLearningsCompleted);

  useEffect(() => {
    if (id) {
      userFetch.getUserById(id, setUser);
      learningFetch.fetchUserLearnings(id, setUserLearnings);
    }
  }, []);
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

      {user && <ProfileCard user={user} />}
      <LearningCard title="Formation complétées" items={itemsCompleted} />
    </div>
  );
};
