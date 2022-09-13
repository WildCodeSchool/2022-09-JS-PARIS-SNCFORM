import React, { useRef, useState } from "react";
import "./SignUpPage.scss";
import { Field } from "@components/index";
import { UserSignUpType } from "../../types/index";

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

  const [userSignUp, setUserSignUp] = useState<UserSignUpType>(intialSignUp);
  const selectRef = useRef<HTMLSelectElement>(null);
  const onChangeSelect = () => {
    setUserSignUp((prev) => {
      return { ...prev, jobType: selectRef.current?.value };
    });
  };

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
        <div className="signup__select-group">
          <label htmlFor="job-type">Métier *</label>
          <select
            ref={selectRef}
            name="job-type"
            id="job-type"
            onChange={onChangeSelect}
          >
            <option value="">Corp de Métier</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
            <option value="option5">Option 5</option>
          </select>
        </div>
        {inputData.map((data) => (
          <Field key={data.inputId} {...data} onChange={setUserSignUp} />
        ))}
        <button type="submit">Envoie</button>
      </form>
    </div>
  );
};
