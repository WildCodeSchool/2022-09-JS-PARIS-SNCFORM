import React, { useEffect, useState } from "react";
import "./LearningCatalogPage.scss";
import { LearningDisplayList, SearchBar } from "@components/index";
import { useParams } from "react-router-dom";
import { learningFetch } from "@services/index";
import { LearningType } from "@type/learningTypes";

export const LearningCatalogPage = () => {
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [learningList, setLearningList] = useState<LearningType[] | null>(null);
  const { catId } = useParams();

  useEffect(() => {
    if (catId) {
      learningFetch.fetchByCatAndUserGrade(catId, setLearningList);
    }
  });

  const learningListSearched = learningList?.filter(
    (learning) =>
      !searchValue ||
      learning.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <div className="catalog">
      <SearchBar onChange={setSearchValue} />
      {learningListSearched?.length ? (
        <LearningDisplayList learningList={learningListSearched} />
      ) : (
        <h3>Pas encore de formations pour cette catégories</h3>
      )}
    </div>
  );
};
