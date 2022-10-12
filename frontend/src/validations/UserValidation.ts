import * as yup from "yup";

export const mailFormat = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
// valid email example : a-z.A-Z_123@aZ123.1234
const cpNumberFormat = /\b\d{7}[a-zA-Z]{1}\b/g;
// valid cp example : 1234567a or 1234567A
export const passwordFormat =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W]).{8,}/g;

export const userSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, "Prénom doit contenir 3 charactères minimum")
    .required("Prénom est obligatoire"),
  lastName: yup
    .string()
    .min(2, "Nom doit contenir 2 charactères minimum")
    .max(255, "Nom doit contenir 255 charactères max")
    .required("Nom est obligatoire"),
  genre: yup.string().required("Civilité est obligatoire"),
  cpNumber: yup
    .string()
    .matches(cpNumberFormat, "Cp ne correspond pas à l'identifiant Groupe SNCF")
    .required("CP est obligatoire"),
  email: yup
    .string()
    .matches(mailFormat, "Format Email non valide")
    .required("Email est obligatoire"),
  manager: yup.string().required("Selectionner votre manager"),
  grade: yup.string().required("Selectionner votre grade"),
  jobType: yup.string().required("Selectionner votre métier"),
  password: yup
    .string()
    .matches(
      passwordFormat,
      "Doit contenir 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial"
    )
    .required("Mot de passe est obligatoire"),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      "Confirmation et Mot de passe doivent être similaires"
    )
    .required("Confirmation est obligatoire"),
});
