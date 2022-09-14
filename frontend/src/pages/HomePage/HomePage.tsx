import React from "react";
import "./HomePage.scss";
import { Button } from "@components/Button/Button";
import { HomeCarousel } from "@components/HomeCarousel/HomeCarousel";
import { Link, useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/about");
  }
  return (
    <div className="home-page">
      <h3 className="home-page__connexion">
        <Link to="/about">Connexion</Link>
      </h3>
      <HomeCarousel />
      <Button textButton="Inscription" />
    </div>
  );
};
