import * as yup from "yup";

const mailFormat = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
// exemple de mail autorisé : a-z.A-Z_123@aZ123.1234

export const userSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, "votre prénom doit contenir 3 charactères minimum"),
  lastName: yup.string().required("votre nom est obligatoire"),
  genre: yup.string().required(),
  cpNumber: yup.string().required(),
  email: yup.string().matches(mailFormat).required(),
  manager: yup.number().integer().required("selectioner votre manager"),
  grade: yup.number().integer().required("selectioner votre grade"),
  jobType: yup.number().integer().required("selectioner votre métier"),
  password: yup
    .string()
    .min(6, "6 charactères minimum")
    .required("le mot de passe est obligatoire"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required("les mots de passe doivent être similaires"),
});
