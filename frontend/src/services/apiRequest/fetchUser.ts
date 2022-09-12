import axios from "axios";
import { UserSignUpType } from "../../types";

export const userSignUp = (userData: UserSignUpType) => {
  axios
    .post("/register", { ...userData })
    .then((response) => response.data)
    .then((response) => console.warn(response));
};
