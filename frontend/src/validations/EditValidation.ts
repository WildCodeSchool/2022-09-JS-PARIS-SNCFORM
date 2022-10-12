import * as yup from "yup";
import { mailFormat, passwordFormat } from "@validations/UserValidation";

// EditProfilePage
export const editSchema = yup.object().shape({
  first_name: yup.string().min(3, "Prénom doit contenir 3 charactères minimum"),
  last_name: yup
    .string()
    .min(2, "Nom doit contenir 2 charactères minimum")
    .max(255, "Nom doit contenir 255 charactères max"),
  email: yup.string().matches(mailFormat),
  newPassword: yup
    .string()
    .matches(
      passwordFormat,
      "Doit contenir 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial"
    ),
  confirm_password: yup
    .string()
    .oneOf(
      [yup.ref("newPassword")],
      "Confirmation et Nouveau mot de passe doivent être similaires"
    ),
  oldPassword: yup
    .string()
    .required(
      "Mot de passe actuel doit être saisi pour valider les modifications"
    ),
});
