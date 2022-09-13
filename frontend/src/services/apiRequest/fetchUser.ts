import axios from "axios";
import { UserSignUpType } from "../../types";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const signUp = (userData: UserSignUpType) => {
  axios
    .post(`${BASE_URL}/users`, { ...userData })
    .then((response) => response.data)
    .then((response) => response);
};

export const userFetch = {
  signUp,
};
