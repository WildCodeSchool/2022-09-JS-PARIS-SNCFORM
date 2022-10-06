import * as yup from "yup";

const mailFormat = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
// valid email example : a-z.A-Z_123@aZ123.1234
// EditProfilePage
export const editSchema = yup.object().shape({
  first_name: yup.string().min(3, "Prénom doit contenir 3 charactères minimum"),
  last_name: yup
    .string()
    .min(2, "Nom doit contenir 2 charactères minimum")
    .max(255, "Nom doit contenir 255 charactères max"),
  email: yup.string().matches(mailFormat),
  newPassword: yup.string().min(6, "6 charactères minimum"),
  confirm_password: yup
    .string()
    .min(6, "6 charactères minimum")
    .oneOf([yup.ref("newPassword"), null]),
  oldPassword: yup
    .string()
    .min(6, "6 charactères minimum")
    .required(
      "Mot de passe actuel doit être saisi pour valider les modifications"
    ),
});
