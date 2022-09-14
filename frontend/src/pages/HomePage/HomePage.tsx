import React from "react";
import "./HomePage.scss";
import { Button, AppCarousel } from "@components/index";
import { Link, useNavigate } from "react-router-dom";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <Link to="/about">
        <h3 className="home-page__connexion">Connexion</h3>
      </Link>
      <AppCarousel />
      <Button
        textButton="Inscription"
        onClick={() => navigate("/inscription")}
      />
    </div>
  );
};
