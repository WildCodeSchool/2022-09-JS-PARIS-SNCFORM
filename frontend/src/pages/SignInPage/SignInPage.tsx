import React, { useState } from "react";
import "./SignInPage.scss";
import { Field, Button, RedirectLink } from "@components/index";
import { UserType } from "@type/userTypes";
import { authFetch } from "@services/index";
import { useNavigate } from "react-router-dom";

export const SignInPage: React.FC = () => {
  const [userSignIn, setUserSignIn] = useState<Partial<UserType> | null>(null);

  const inputData = [
    {
      label: "CP",
      inputId: "cpNumber",
      isRequire: true,
    },
    {
      label: "Mot de passe",
      inputId: "password",
      isRequire: true,
      inputType: "password",
      autoComplete: "on",
    },
  ];

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    authFetch.login(userSignIn, navigate);
  };

  return (
    <div className="signin">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        {inputData.map((data) => (
          <Field key={data.inputId} {...data} onChange={setUserSignIn} />
        ))}
        <Button textButton="Connexion" isSubmit />
      </form>
      <RedirectLink
        message="Pas encore inscrit ? "
        span="Inscription"
        path="/inscription"
      />
    </div>
  );
};
