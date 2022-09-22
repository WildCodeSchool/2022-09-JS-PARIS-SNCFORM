import React from "react";
import "./EditProfilePage.scss";
import { Button, Field } from "@components/index";

export const EditProfilePage: React.FC = () => {
  const inputData = [
    {
      label: "Nom",
      inputId: "lastName",
    },
    {
      label: "Prénom",
      inputId: "firstName",
    },
    {
      label: "Email",
      inputId: "email",
    },
    {
      label: "Nouveau mot de passe",
      inputId: "password",
      inputType: "password",
      autoComplete: "on",
    },
    {
      label: "Confirmation",
      inputId: "confirm-password",
      inputType: "password",
      autoComplete: "on",
    },
    {
      label: "Mot de passe actuel",
      inputId: "old-password",
      inputType: "password",
      autoComplete: "on",
    },
  ];

  return (
    <div className="edit-profile-page">
      {/* <form>
        {inputData.map((data) => (
          <Field key={data.inputId} {...data} />
        ))}
        <Button textButton="Modifier" isSubmit />
      </form> */}
    </div>
  );
};
