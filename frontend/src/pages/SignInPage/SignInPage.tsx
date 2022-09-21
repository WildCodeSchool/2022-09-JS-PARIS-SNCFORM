import React, { useState } from "react";
import "./SignInPage.scss";
import { Field, Button, RedirectLink } from "@components/index";
import { UserSignInType, UserType } from "@type/userTypes";
import { authFetch } from "@services/index";

export const SignInPage: React.FC = () => {
  const intialSignIn: UserSignInType = {
    cpNumber: "",
    password: "",
  };
  const [userSignIn, setUserSignIn] = useState<UserSignInType>(intialSignIn);
  const [user, setUser] = useState<UserType | null>(null);
  console.warn("User", user);
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
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    authFetch.login(userSignIn, setUser);
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
