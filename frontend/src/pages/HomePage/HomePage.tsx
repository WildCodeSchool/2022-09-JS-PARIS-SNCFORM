import React from "react";
import "./HomePage.scss";
import { Button, AppCarousel } from "@components/index";
import { Link, useNavigate } from "react-router-dom";

type HomePagProps = {
  isAuth: boolean;
};

export const HomePage: React.FC<HomePagProps> = ({ isAuth }) => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <div className="home-page__content">
        {!isAuth && (
          <Link to="connexion">
            <h3 className="home-page__connexion">Connexion</h3>
          </Link>
        )}
        <AppCarousel />
        <Button
          textButton={isAuth ? "Acceder" : "Inscription"}
          onClick={() => navigate(isAuth ? "/menu" : "/inscription")}
        />
      </div>
    </div>
  );
};
