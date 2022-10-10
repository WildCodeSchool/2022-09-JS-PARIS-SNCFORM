import { LearningType } from "@type/index";
import React from "react";
import Carousel from "react-grid-carousel";
import { Link } from "react-router-dom";
import "./LearningCard.scss";

type LearningCardType = {
  cardTitle: string;
  items: Partial<LearningType>[] | LearningType[] | undefined | null;
  autoplay?: number;
};

export const LearningCard: React.FC<LearningCardType> = ({
  cardTitle,
  items,
  autoplay = 5000,
}) => {
  return (
    <div className="learning-card">
      <h2>{cardTitle}</h2>
      <div>
        {items?.length ? (
          <Carousel cols={1} rows={1} gap={35} loop autoplay={autoplay}>
            {/* loop on array itemsCompleted in ProfilePage */}
            {items.map((item) => {
              const { id, title } = item;
              return (
                <Carousel.Item key={id}>
                  <Link to={`detail-formations/${id}`}>
                    <img
                      src={`./assets/images/categories/category-${item.category_id}.png`}
                      alt="Carte couverture"
                    />
                    <h3>{title}</h3>
                  </Link>
                </Carousel.Item>
              );
            })}
          </Carousel>
        ) : (
          <h3>Pas de formations</h3>
        )}
      </div>
    </div>
  );
};
