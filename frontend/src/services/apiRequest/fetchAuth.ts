import axios from "axios";
import { SetUser } from "@pages/index";
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
    .then(({ data }) => {
      const { token, user } = data;
      setState(user);
      sessionStorage.setItem("token", token);
    })

    .catch((err) => console.error(err));
};

const logout = () => {
  const token = sessionStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  axios
    .post(`${BASE_URL}/logout`, {}, { headers })
    .then(({ data }) => {
      console.warn("data in logout", data);
      sessionStorage.removeItem("token");
    })

    .catch((err) => console.error(err));
};

export const authFetch = {
  signup,
  login,
  logout,
};
