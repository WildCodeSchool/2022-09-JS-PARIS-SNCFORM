import React from "react";
import Carousel from "react-grid-carousel";
import "./HomeCarousel.scss";

export const HomeCarousel: React.FC = () => {
  return (
    <div className="carousel">
      <Carousel cols={1} rows={1} gap={10} loop autoplay={5000}>
        <Carousel.Item>
          <img
            width="100%"
            src="https://picsum.photos/800/600?random=1"
            alt="image1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100%"
            src="https://picsum.photos/800/600?random=2"
            alt="image2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100%"
            src="https://picsum.photos/800/600?random=3"
            alt="image3"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100%"
            src="https://picsum.photos/800/600?random=4"
            alt="image4"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
