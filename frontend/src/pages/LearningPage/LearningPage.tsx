import React, { useEffect, useState } from "react";
import { RoundCardList } from "@components/index";
import { categoryFetch } from "@services/index";
import { CategoryType } from "@type/index";
import "./LearningPage.scss";

export const LearningPage: React.FC = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    categoryFetch.getAllCategory(setCategories);
  }, []);

  return (
    <div className="learning-page">
      <div className="learning-page__icon-home">
        <img src="src/assets/images/iconHome.jpg" alt="" />
      </div>
      <RoundCardList list={categories} label="Catégories" />
    </div>
  );
};
