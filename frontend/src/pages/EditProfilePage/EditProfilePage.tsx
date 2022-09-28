import React, { useEffect, useState } from "react";
import "./EditProfilePage.scss";
import { Button, Field, IconLink } from "@components/index";
import { UserEditType } from "@type/userTypes";
import { userFetch } from "@services/index";
import { HomeIcon } from "@assets/images/SvgComponent/HomeIcon";

export const EditProfilePage: React.FC = () => {
  const [editUser, setEditUser] = useState<UserEditType | null>(null);
  console.warn("test", editUser);

  const inputData = [
    {
      label: "Nom",
      inputId: "lastName",
      value: editUser?.lastName,
    },
    {
      label: "Prénom",
      inputId: "firstName",
      value: editUser?.firstName,
    },
    {
      label: "Email",
      inputId: "email",
      value: editUser?.email,
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

  useEffect(() => {
    userFetch.getUserById(setEditUser);
  }, []);

  return (
    <div className="edit-profile">
      <IconLink iconComponent={<HomeIcon />} path="/menu" />
      <form className="edit-profile__form">
        {inputData.map((data) => (
          <Field key={data.inputId} {...data} onChange={setEditUser} />
        ))}
        <Button textButton="Modifier" isSubmit />
      </form>
    </div>
  );
};
