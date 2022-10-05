import React, { useEffect, useState } from "react";
import "./EditProfilePage.scss";
import { Button, Field, IconLink } from "@components/index";
import { UserType } from "@type/userTypes";
import { HomeIcon } from "@assets/images/SvgComponent/HomeIcon";
import { userFetch } from "@services/index";
import { useUserContext } from "@context/index";

export const EditProfilePage: React.FC = () => {
  const { user } = useUserContext();
  const [editUser, setEditUser] = useState<Partial<UserType> | null>(null);

  useEffect(() => {
    setEditUser(user);
  }, [user]);

  const handleSubmit = () => {
    userFetch.editUser(editUser);
  };

  const inputData = [
    {
      label: "Nom",
      inputId: "last_name",
      value: editUser?.last_name,
    },
    {
      label: "Prénom",
      inputId: "first_name",
      value: editUser?.first_name,
    },
    {
      label: "Email",
      inputId: "email",
      inputType: "email",
      value: editUser?.email,
    },
    {
      label: "Nouveau mot de passe",
      inputId: "newPassword",
      inputType: "password",
      autoComplete: "on",
    },
    {
      label: "Confirmation",
      inputId: "confirm_password",
      inputType: "password",
      autoComplete: "on",
    },
    {
      label: "Mot de passe actuel",
      inputId: "oldPassword",
      inputType: "password",
      autoComplete: "on",
    },
  ];

  return (
    <div className="edit-profile">
      <IconLink
        iconComponent={<HomeIcon />}
        path="/menu"
        className="icon-top-right"
      />
      <form className="edit-profile__form" onSubmit={handleSubmit}>
        <div className="edit-profile__fields">
          {inputData.map((data) => (
            <Field key={data.inputId} {...data} onChange={setEditUser} />
          ))}
        </div>
        <Button textButton="Modifier" isSubmit />
      </form>
    </div>
  );
};
