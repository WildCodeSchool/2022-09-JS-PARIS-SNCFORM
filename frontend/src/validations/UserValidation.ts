import * as yup from "yup";

const mailFormat = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
// valid email example : a-z.A-Z_123@aZ123.1234
const cpNumberFormat = /\b\d{7}[a-zA-Z]{1}\b/g;

export const userSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, "Prénom doit contenir 3 charactères minimum") // mettre les maximum sur tout les champs
    .required("Prénom est un champ obligatoire"),
  lastName: yup
    .string()
    .min(2, "Nom doit contenir 2 charactères minimum")
    .max(255, "Nom doit contenir 255 charactères max")
    .required("Nom est un champ obligatoire"),
  genre: yup.string().required("Civilité est un champ obligatoire"),
  cpNumber: yup
    .string()
    .matches(cpNumberFormat, "Cp ne correspond pas à l'identifiant Groupe SNCF")
    .required("CP est un champ obligatoire"),
  email: yup
    .string()
    .matches(mailFormat)
    .required("Email est un champ obligatoire"),
  manager: yup.string().required("Selectionner votre manager"),
  grade: yup.string().required("Selectionner votre grade"),
  jobType: yup.string().required("Selectionner votre métier"),
  password: yup
    .string()
    .min(6, "6 charactères minimum")
    .required("Mot de passe est un champ obligatoire"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required("Les mots de passe doivent être similaires"),
});
