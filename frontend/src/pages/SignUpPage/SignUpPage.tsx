import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./SignUpPage.scss";
import { Field, Select, Button } from "@components/index";
import { userFetch, jobFetch, gradeFetch, authFetch } from "@services/index";
import { UserSignUpType, UserType } from "@type/index";

type JobGradeType = {
  id: number;
  name: string;
};

export type SetUserSignUpType = Dispatch<SetStateAction<UserSignUpType>>;
export type SetJobGradeType = Dispatch<SetStateAction<JobGradeType[]>>;
export type SetUser = React.Dispatch<React.SetStateAction<UserType | null>>;
export type SetUsersType = React.Dispatch<
  React.SetStateAction<UserType[] | null>
>;

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

  const [userSignUp, setUserSignUp] = useState<UserSignUpType>(intialSignUp);
  const [jobs, setJobs] = useState<JobGradeType[]>([]);
  const [grades, setGrades] = useState<JobGradeType[]>([]);
  const [managers, setManagers] = useState<UserType[] | null>(null);

  const onChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserSignUp((prev) => {
      return { ...prev, genre: e.target.value };
    });
  };

  const managerData = managers?.map((manager) => {
    return {
      id: manager.id,
      name: `${manager.first_name} ${manager.last_name}`,
    };
  });

  const managerOptions = managerData
    ? [{ id: 0, name: "Manager" }, ...managerData]
    : [{ id: 0, name: "Manager" }];

  const selectOptions = [{ id: 0, name: "Corp de Métier" }, ...jobs];

  const gradeOptions = [{ id: 0, name: "Qualif" }, ...grades];

  useEffect(() => {
    gradeFetch.getAllGrade(setGrades);
    jobFetch.getAllJob(setJobs);
    userFetch.getUserByRole("manager", setManagers);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    authFetch.signup(userSignUp);
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
      inputType: "password",
      autoComplete: "on",
    },
    {
      label: "Confirmation",
      inputId: "confirm-password",
      isRequire: true,
      inputType: "password",
      autoComplete: "on",
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
              value="Homme"
              id="male"
              name="gender"
              onChange={onChangeRadio}
            />
            M
          </label>
          <label htmlFor="female">
            <input
              type="radio"
              value="Femme"
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
        <div className="signup__field">
          {inputData.map((data) => (
            <Field key={data.inputId} {...data} onChange={setUserSignUp} />
          ))}
        </div>
        <Button textButton="Envoie" isSubmit />
      </form>
    </div>
  );
};
