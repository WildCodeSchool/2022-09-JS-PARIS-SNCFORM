import * as yup from "yup";

export const UserSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  genre: yup.string().required(),
  cpNumber: yup.string().required(),
  email: yup.string().email().required(),
  manager: yup.number().integer().required(),
  grade: yup.number().integer().required(),
  jobType: yup.number().integer().required(),
  password: yup.string().min(6).required(),
});
