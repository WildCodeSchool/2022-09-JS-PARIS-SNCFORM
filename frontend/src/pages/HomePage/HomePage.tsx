import React from "react";
import "./HomePage.scss";
import { Button } from "@components/Button/Button";
import { AppCarousel } from "@components/AppCarousel/AppCarousel";
import { Link, useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <h3 className="home-page__connexion">
        <Link to="/about">Connexion</Link>
      </h3>
      <AppCarousel />
      <Button textButton="Inscription" onClick={() => navigate("/about")} />
    </div>
  );
};
