import * as yup from "yup";

const mailformat =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const userSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, "votre prénom doit contenir 3 charactères minimum"),
  lastName: yup.string().required("votre nom est obligatoire"),
  genre: yup.string().required(),
  cpNumber: yup.string().required(),
  email: yup.string().matches(mailformat).required(),
  manager: yup.number().integer().required("selectioner votre manager"),
  grade: yup.number().integer().required("selectioner votre grade"),
  jobType: yup.number().integer().required("selectioner votre métier"),
  password: yup.string().min(6).required("6 charactères minimum"),
  confirmPassword: yup
    .string()
    .oneOf([
      yup.ref("password"),
      null,
      "les mots de passe doivent être similaires",
    ])
    .required(),
});
