import React, { useState } from "react";
import "./SignInPage.scss";
import { Field, Button } from "@components/index";
import { useNavigate } from "react-router-dom";
import { UserSignInType, UserType } from "@type/userTypes";
import { userFetch } from "@services/index";

export const SignInPage: React.FC = () => {
  const intialSignIn: UserSignInType = {
    cpNumber: "",
    password: "",
  };

  const navigate = useNavigate();
  const [userSignIn, setUserSignIn] = useState<UserSignInType>(intialSignIn);
  const [user, setUser] = useState<UserType | null>(null);
  console.warn(user);
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
    userFetch.login(userSignIn, setUser);
  };

  return (
    <div className="signin">
      <form onSubmit={handleSubmit}>
        {inputData.map((data) => (
          <Field key={data.inputId} {...data} onChange={setUserSignIn} />
        ))}
        <Button textButton="Connexion" onClick={() => navigate("/")} />
      </form>
    </div>
  );
};
