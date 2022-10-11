import React from "react";
import { RoundCard } from "@components/index";
import { CategoryType } from "@type/index";
import "./RoundCardList.scss";

type RoundCardListProps = {
  list: CategoryType[];
  label: string;
};

export const RoundCardList: React.FC<RoundCardListProps> = ({
  label,
  list,
}) => {
  return (
    <div className="round-card-list">
      <h2>{label}</h2>
      <div className="round-card-list__items">
        {list?.length > 0 &&
          list.map((listItem) => (
            <RoundCard
              key={listItem.id}
              label={listItem.title}
              path={`/catalogue-formations/${listItem.category_id}`}
              imgUrl={`./assets/images/categories/category-${listItem.category_id}.png`}
            />
          ))}
      </div>
    </div>
  );
};
