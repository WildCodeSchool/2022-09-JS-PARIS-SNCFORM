import React, { useEffect, useState } from "react";
import "./EditProfilePage.scss";
import { Button, Field, IconLink, InfoMessage } from "@components/index";
import { UserType } from "@type/userTypes";
import { HomeIcon } from "@assets/images/SvgComponent/HomeIcon";
import { userFetch } from "@services/index";
import { useUserContext } from "@context/index";
import { ErrorsType } from "@pages/index";
import { ValidationError } from "yup";
import { editSchema } from "@validations/index";

export const EditProfilePage: React.FC = () => {
  const { user } = useUserContext();
  const [editUser, setEditUser] = useState<Partial<UserType> | null>(null);
  const [messageInfo, setMessageInfo] = useState<{
    status: string;
    message: string;
  } | null>(null);

  useEffect(() => {
    setEditUser(user);
  }, [user]);

  const [profileErrors, setProfileErrors] = useState<ErrorsType>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // check field validity
    editSchema
      .validate(editUser, { abortEarly: false })
      .then(() => {
        userFetch.editUser(editUser, setMessageInfo);
      })
      .catch((err: ValidationError) => {
        const yupErrors: ErrorsType = {};
        err.inner.forEach((element) => {
          if (element.path !== undefined) {
            yupErrors[element.path] = element.errors;
          }
        });
        setProfileErrors(yupErrors);
      });
  };

  const handleChangeBio = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditUser((prev) => {
      return { ...prev, bio: e.target.value };
    });
  };

  const inputEditData = [
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
      label: "Photo Profil",
      inputId: "avatar",
      inputType: "file",
    },
    {
      label: "Photo de couverture",
      inputId: "background_profil",
      inputType: "file",
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
      {messageInfo && <InfoMessage messageInfo={messageInfo} />}
      <form className="edit-profile__form" onSubmit={handleSubmit}>
        <div className="edit-profile__fields">
          {inputEditData.map((fieldData) => (
            <Field
              key={fieldData.inputId}
              errors={
                profileErrors && profileErrors[fieldData.inputId] // or profileErrors.firstname [data.inputId] is the field's value
                  ? profileErrors[fieldData.inputId]
                  : undefined
              }
              {...fieldData}
              onChange={setEditUser}
            />
          ))}
        </div>
        <div className="edit-profile__bio">
          <label htmlFor="bio">Biographie</label>
          <textarea name="bio" onChange={handleChangeBio} />
        </div>
        <Button textButton="Modifier" isSubmit />
      </form>
    </div>
  );
};
