import React, { Dispatch, SetStateAction, useState } from "react";
import "./SignUpPage.scss";
import { Field, Select } from "@components/index";
import { UserSignUpType } from "../../types/index";

export type SetUserSignUp = Dispatch<SetStateAction<UserSignUpType>>;
export const SignUpPage: React.FC = () => {
  const intialSignUp: UserSignUpType = {
    firstName: "",
    lastName: "",
    genre: "",
    cpNumber: "",
    email: "",
    jobType: "",
    password: "",
  };

  const selectOptions = [
    { value: "", label: "Corp de Métier" },
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
    { value: "option5", label: "Option 5" },
  ];

  const [userSignUp, setUserSignUp] = useState<UserSignUpType>(intialSignUp);

  const onChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserSignUp((prev) => {
      return { ...prev, genre: e.target.value };
    });
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
      <form>
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
          selectLabel="Métier"
          selectId="job-type"
          options={selectOptions}
        />
        {inputData.map((data) => (
          <Field key={data.inputId} {...data} onChange={setUserSignUp} />
        ))}
        <button type="submit">Envoie</button>
      </form>
    </div>
  );
};
