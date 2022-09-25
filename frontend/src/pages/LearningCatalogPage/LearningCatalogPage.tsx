import React, { useState } from "react";
import "./LearningCatalogPage.scss";
import { SearchBar } from "@components/index";

export const LearningCatalogPage = () => {
  const [searchValue, setSearchValue] = useState<string | null>(null);
  console.log("searchValue:", searchValue);

  return (
    <div className="catalog">
      <SearchBar onChange={setSearchValue} />
    </div>
  );
};
