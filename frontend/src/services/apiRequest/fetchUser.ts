import axios from "axios";
import { SetUser, SetUsersType } from "@pages/index";
import { UserSignInType, UserSignUpType } from "../../type";

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

const login = (userLogin: UserSignInType, setState: SetUser) => {
  axios
    .post(`${BASE_URL}/login`, { ...userLogin })
    .then(({ data }) => setState(data))
    .catch((err) => console.error(err));
};

const getUserByRole = (role: string, setState: SetUsersType) => {
  axios
    .get(`${BASE_URL}/users/role/${role}`)
    .then(({ data }) => setState(data))
    .catch((err) => console.error(err));
};

export const userFetch = {
  signup,
  getUserByRole,
  login,
};
