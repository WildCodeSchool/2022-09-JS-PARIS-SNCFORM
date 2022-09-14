import React, { Dispatch, SetStateAction, useState } from "react";
import "./SignUpPage.scss";
import { Field, Select } from "@components/index";
import { userFetch } from "@services/apiRequest/fetchUser";
import { UserSignUpType } from "../../types/index";

export type SetUserSignUp = Dispatch<SetStateAction<UserSignUpType>>;
export const SignUpPage: React.FC = () => {
  const intialSignUp: UserSignUpType = {
    firstName: "",
    lastName: "",
    genre: "",
    cpNumber: "",
    email: "",
    jobType: 0,
    password: "",
    grade: 0,
    manager: 0,
  };

  const selectOptions = [
    { value: 0, label: "Corp de Métier" },
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
    { value: 3, label: "Option 3" },
    { value: 4, label: "Option 4" },
    { value: 5, label: "Option 5" },
  ];

  const gradeOptions = [
    { value: 0, label: "Qualif" },
    { value: 1, label: "Qualif 1" },
    { value: 2, label: "Qualif 2" },
    { value: 3, label: "Qualif 3" },
    { value: 4, label: "Qualif 4" },
    { value: 5, label: "Qualif 5" },
    { value: 6, label: "Qualif 6" },
    { value: 7, label: "Qualif 7" },
    { value: 8, label: "Qualif 8" },
  ];

  const managerOptions = [
    { value: 0, label: "Manager" },
    { value: 1, label: "Manager 1" },
    { value: 2, label: "Manager 2" },
    { value: 3, label: "Manager 3" },
  ];

  const [userSignUp, setUserSignUp] = useState<UserSignUpType>(intialSignUp);

  const onChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserSignUp((prev) => {
      return { ...prev, genre: e.target.value };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    userFetch.addUser(userSignUp);
  };

  const inputData = [
    {
      label: "Nom",
      inputId: "lastName",
      isRequire: true,
    },
    {
      label: "Prénom",
      inputId: "firstName",
      isRequire: true,
    },
    {
      label: "CP",
      inputId: "cpNumber",
      isRequire: true,
    },
    {
      label: "Email",
      inputId: "email",
      isRequire: true,
    },
    {
      label: "Mot de passe",
      inputId: "password",
      isRequire: true,
    },
    {
      label: "Confirmation",
      inputId: "confirm-password",
      isRequire: true,
    },
  ];

  return (
    <div className="signup">
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <div className="signup__radio">
          <p>Civilité *</p>
          <label htmlFor="male">
            <input
              type="radio"
              value="male"
              id="male"
              name="gender"
              onChange={onChangeRadio}
            />
            M
          </label>
          <label htmlFor="female">
            <input
              type="radio"
              value="female"
              id="female"
              name="gender"
              onChange={onChangeRadio}
            />
            Mme
          </label>
        </div>
        <Select
          onChange={setUserSignUp}
          label="Métier"
          selectId="jobType"
          options={selectOptions}
          isRequire
        />
        <Select
          onChange={setUserSignUp}
          label="Grade"
          selectId="grade"
          options={gradeOptions}
          isRequire
        />
        <Select
          onChange={setUserSignUp}
          label="Manager"
          selectId="manager"
          options={managerOptions}
          isRequire
        />
        {inputData.map((data) => (
          <Field key={data.inputId} {...data} onChange={setUserSignUp} />
        ))}
        <button type="submit">Envoie</button>
      </form>
    </div>
  );
};
