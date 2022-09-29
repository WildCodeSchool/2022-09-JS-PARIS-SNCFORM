import React, { useEffect, useState } from "react";
import { IconLink, RoundCardList, LearningCard } from "@components/index";
import { categoryFetch } from "@services/index";
import { CategoryType } from "@type/index";
import { HomeIcon } from "@assets/images/SvgComponent/HomeIcon";
import "./LearningPage.scss";

export const LearningPage: React.FC = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  useEffect(() => {
    categoryFetch.getAllCategory(setCategories);
  }, []);

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
    <div className="learning-page">
      <IconLink
        iconComponent={<HomeIcon />}
        path="/menu"
        className="icon-top-right"
      />

      <RoundCardList list={categories} label="Catégories" />
      <LearningCard title="Recommandées pour vous" items={itemsCompleted} />
    </div>
  );
};
