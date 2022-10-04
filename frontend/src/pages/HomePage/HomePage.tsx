import React from "react";
import "./HomePage.scss";
import { Button } from "@components/index";
import { Link, useNavigate } from "react-router-dom";

type HomePagProps = {
  isAuth: boolean;
};

export const HomePage: React.FC<HomePagProps> = ({ isAuth }) => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <div className="home-page__content">
        <div className="home-page__image">
          <img
            src="./assets/images/formation-home.jpg"
            alt="Accueil formations"
          />
        </div>
        {!isAuth && (
          <Link to="connexion">
            <h3 className="home-page__connexion">Connexion</h3>
          </Link>
        )}
        <Button
          textButton={isAuth ? "Acceder" : "Inscription"}
          onClick={() => navigate(isAuth ? "/menu" : "/inscription")}
        />
      </div>
    </div>
  );
};
