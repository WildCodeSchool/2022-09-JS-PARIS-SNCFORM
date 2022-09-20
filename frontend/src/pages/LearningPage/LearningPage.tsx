import React, { useEffect, useState } from "react";
import { IconLink, RoundCardList } from "@components/index";
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
      <IconLink
        icon="src/assets/images/iconHome.jpg"
        iconAlt="Icone Home"
        path="/menu"
        styles={{
          top: "1em",
          right: "1em",
          position: "absolute",
          width: "3em",
          height: "3em",
        }}
      />

      <RoundCardList list={categories} label="Catégories" />
    </div>
  );
};
