import axios from "axios";
import { SetUser } from "@pages/index";
import { UserSignUpType } from "../../type";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const signup = (userData: UserSignUpType) => {
  axios
    .post(`${BASE_URL}/signup`, { ...userData })
    .then((response) => {
      if (response.status !== 201) {
        throw new Error(response.data.message);
      }
    })
    .catch((err) => console.error(err));
};

const getUserByRole = (role: string, setState: SetUser) => {
  axios
    .get(`${BASE_URL}/users/role/${role}`)
    .then(({ data }) => setState(data))
    .catch((err) => console.error(err));
};

export const userFetch = {
  signup,
  getUserByRole,
};
