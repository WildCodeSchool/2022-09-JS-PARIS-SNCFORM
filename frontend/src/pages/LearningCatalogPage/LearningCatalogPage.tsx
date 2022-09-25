import React, { useState } from "react";
import "./LearningCatalogPage.scss";
import { LearningDisplay, SearchBar } from "@components/index";

export const LearningCatalogPage = () => {
  const [searchValue, setSearchValue] = useState<string | null>(null);
  console.warn("searchValue:", searchValue);

  return (
    <div className="catalog">
      <SearchBar onChange={setSearchValue} />
      <LearningDisplay
        title="Test title"
        type="Distanciel"
        capacityLearner={30}
      />
    </div>
  );
};
