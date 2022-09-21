import React from "react";
import Carousel from "react-grid-carousel";
import "./LearningCard.scss";

type CarouselItems = {
  image: string;
  alt: string;
};
type LearningCardType = {
  title: string;
  items: CarouselItems[];
  autoplay?: number;
};

export const LearningCard: React.FC<LearningCardType> = ({
  title,
  items,
  autoplay = 5000,
}) => {
  return (
    <div className="learning-card">
      <h1>{title}</h1>
      <Carousel
        className="carousel-card__container"
        cols={1}
        rows={1}
        gap={35}
        loop
        autoplay={autoplay}
      >
        {/* loop on array itemsCompleted in ProfilePage */}
        {items.map((item) => {
          const { image, alt } = item;
          return (
            <Carousel.Item key={alt}>
              <img src={image} alt={alt} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};
