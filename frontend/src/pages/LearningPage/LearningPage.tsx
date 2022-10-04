import React, { useEffect, useState } from "react";
import { IconLink, RoundCardList, LearningCard } from "@components/index";
import { categoryFetch, learningFetch } from "@services/index";
import { CategoryType, LearningType } from "@type/index";
import { HomeIcon } from "@assets/images/SvgComponent/HomeIcon";
import "./LearningPage.scss";
import { tokenApp } from "@tools/index";

export const LearningPage: React.FC = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [recommendedLearnings, setRecommendedLearnings] = useState<
    LearningType[] | null
  >(null);
  const { user } = tokenApp();
  useEffect(() => {
    categoryFetch.getByJob(user?.job_type_id, setCategories);
    learningFetch.fetchByJobAndGrade(
      user?.job_type_id,
      user?.grade_id,
      setRecommendedLearnings
    );
  }, []);

  return (
    <div className="learning-page">
      <IconLink
        iconComponent={<HomeIcon />}
        path="/menu"
        className="icon-top-right"
      />
      <RoundCardList list={categories} label="Catégories" />
      <LearningCard
        cardTitle="Recommandées pour vous"
        items={recommendedLearnings}
      />
    </div>
  );
};
