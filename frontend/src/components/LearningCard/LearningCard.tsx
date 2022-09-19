import React from "react";
import Carousel from "react-grid-carousel";
import "./LearningCard.scss";

export const LearningCard: React.FC = () => {
  return (
    <div className="learning-card">
      <h1>Formations terminées</h1>
      <Carousel
        className="carousel-card__container"
        cols={1}
        rows={1}
        gap={35}
        loop
        autoplay={5000}
      >
        <Carousel.Item className="carousel-card__item">
          <img
            src="src/assets/images/learning-card__img-cybersecurity.jpg"
            alt="cybersecurity"
          />
          <h2>Les cybers reflexes</h2>
        </Carousel.Item>
        <Carousel.Item>
          <img src="src/assets/images/learning-card__img-gun.jpg" alt="gun" />
          <h2>Les bases du tir</h2>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="src/assets/images/learning-card__img-railway.jpg"
            alt="railway"
          />
          <h2>Les risques ferroviaires</h2>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="src/assets/images/learning-card__img-train.jpg"
            alt="train"
          />
          <h2>Devenir conducteur de train</h2>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="src/assets/images/learning-card__img-whiteboard.jpg"
            alt="whiteboard"
          />
          <h2>Management et leadership</h2>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
