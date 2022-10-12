import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./SignUpPage.scss";
import { Field, Select, Button, RedirectLink } from "@components/index";
import { userFetch, jobFetch, gradeFetch, authFetch } from "@services/index";
import { UserSignUpType, UserType } from "@type/index";
import { useNavigate } from "react-router-dom";
import { ValidationError } from "yup";
import { userSchema } from "@validations/index";

type JobGradeType = {
  id: number;
  name: string;
};

export type ErrorsType = {
  [key: string]: string[]; // [firstname or lastname etcc : string] : string[]
};

export type SetUserSignUpType = Dispatch<SetStateAction<UserSignUpType>>;
export type SetJobGradeType = Dispatch<SetStateAction<JobGradeType[]>>;
export type SetUser = React.Dispatch<React.SetStateAction<UserType | null>>;
export type SetUsersType = React.Dispatch<
  React.SetStateAction<UserType[] | null>
>;

export const SignUpPage: React.FC = () => {
  const [userSignUp, setUserSignUp] = useState<Partial<UserType> | null>(null);
  const [jobs, setJobs] = useState<JobGradeType[]>([]);
  const [grades, setGrades] = useState<JobGradeType[]>([]);
  const [managers, setManagers] = useState<UserType[] | null>(null);
  const [errors, setErrors] = useState<ErrorsType>();

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

  const selectOptions = [{ id: 0, name: "Corps de Métier" }, ...jobs];

  const gradeOptions = [{ id: 0, name: "Qualif" }, ...grades];

  useEffect(() => {
    gradeFetch.getAllGrade(setGrades);
    jobFetch.getAllJob(setJobs);
    userFetch.getUserByRole("manager", setManagers);
  }, []);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // check field validity
    userSchema
      .validate(userSignUp, { abortEarly: false })
      .then(() => {
        authFetch.signup(userSignUp, navigate);
        setErrors(undefined);
      })
      .catch((err: ValidationError) => {
        const yupErrors: ErrorsType = {};
        err.inner.forEach((element) => {
          if (element.path !== undefined) {
            yupErrors[element.path] = element.errors;
          }
        });
        setErrors(yupErrors);
      });
  };

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
      label: "CP",
      inputId: "cpNumber",
    },
    {
      label: "Email",
      inputId: "email",
    },
    {
      label: "Mot de passe",
      inputId: "password",
      inputType: "password",
      autoComplete: "on",
    },
    {
      label: "Confirmation",
      inputId: "confirmPassword",
      inputType: "password",
      autoComplete: "on",
    },
  ];
  const selectOptionData = [
    {
      label: "Métier",
      selectId: "jobType",
      options: selectOptions,
    },
    {
      label: "Grade",
      selectId: "grade",
      options: gradeOptions,
    },
    {
      label: "Manager",
      selectId: "manager",
      options: managerOptions,
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
              required
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
              required
            />
            Mme
          </label>
        </div>

        {selectOptionData.map((optionData) => {
          const { label, selectId, options } = optionData;
          return (
            <Select
              key={label}
              onChange={setUserSignUp}
              label={label}
              selectId={selectId}
              options={options}
              isRequire
              errors={
                errors && errors[selectId] // [data.inputId] is the field's value (firstname,lastname...)
                  ? errors[selectId]
                  : undefined
              }
            />
          );
        })}

        <div className="signup__field">
          {inputData.map((fieldData) => (
            <Field
              key={fieldData.inputId}
              errors={
                errors && errors[fieldData.inputId] // or errors.firstname [data.inputId] is the field's value
                  ? errors[fieldData.inputId]
                  : undefined
              }
              {...fieldData}
              onChange={setUserSignUp}
            />
          ))}
        </div>
        <Button textButton="Envoie" isSubmit />
      </form>
      <RedirectLink
        message="Déjà inscrit ? "
        span="Connexion"
        path="/connexion"
      />
    </div>
  );
};
