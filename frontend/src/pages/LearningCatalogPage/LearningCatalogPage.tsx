import React, { useEffect, useState } from "react";
import "./LearningCatalogPage.scss";
import { IconLink, LearningDisplayList, SearchBar } from "@components/index";
import { useNavigate, useParams } from "react-router-dom";
import { learningFetch } from "@services/index";
import { LearningType } from "@type/learningTypes";
import { ArrowBackIcon } from "@assets/index";

export const LearningCatalogPage = () => {
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [learningList, setLearningList] = useState<LearningType[] | null>(null);
  const { catId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (catId) {
      learningFetch.fetchByCatAndUserGrade(catId, setLearningList);
    }
  });

  const handleClickIcon = () => {
    navigate(-1);
  };

  const learningListSearched = learningList?.filter(
    (learning) =>
      !searchValue ||
      learning.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <div className="catalog">
      <SearchBar onChange={setSearchValue} />
      <IconLink
        className="icon-top-right"
        iconComponent={<ArrowBackIcon onClick={handleClickIcon} />}
        path="#"
      />

      {learningListSearched?.length ? (
        <LearningDisplayList learningList={learningListSearched} />
      ) : (
        <h3>Pas de formations pour cette catégories</h3>
      )}
    </div>
  );
};
