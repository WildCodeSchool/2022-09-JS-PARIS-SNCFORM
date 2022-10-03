import * as yup from "yup";

const mailFormat = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
// exemple de mail autorisé : a-z.A-Z_123@aZ123.1234

export const userSchema = yup.object().shape({
  firstName: yup.string().min(3, "Prénom doit contenir 3 charactères minimum"), // mettre les maximum sur tout les champs
  lastName: yup.string().required("Nom est obligatoire"),
  genre: yup.string().required("Civilité est un champ obligatoire"),
  cpNumber: yup.string().required("CP est un champ obligatoire"),
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
    .required("Password est un champ obligatoire"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required("Les mots de passe doivent être similaires"),
});
