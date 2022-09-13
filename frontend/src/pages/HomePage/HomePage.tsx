import React from "react";
import "./HomePage.scss";
import { Button } from "@components/Button/Button";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="home-page">
      <h3 className="connexion">
        <Link to="/about" />
        Connexion
      </h3>
      <Button textButton="Inscription" />
    </div>
  );
};
