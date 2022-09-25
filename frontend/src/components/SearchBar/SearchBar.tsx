import { SearchIcon } from "@assets/images";
import { SetStateType } from "@type/common";
import React from "react";
import "./SearchBar.scss";

type SearchBarProps = {
  onChange: SetStateType<string | null>;
};
export const SearchBar: React.FC<SearchBarProps> = ({ onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleClick = () => {
    console.warn("test search");
  };

  return (
    <div className="search-bar">
      <input type="text" onChange={handleChange} />
      <SearchIcon onClick={handleClick} />
    </div>
  );
};
