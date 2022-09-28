import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { UserSignUpType } from "../../type";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const signup = (userData: UserSignUpType, navigate: NavigateFunction) => {
  axios
    .post(`${BASE_URL}/signup`, { ...userData })
    .then((response) => {
      if (response.status !== 201) {
        throw new Error(response.data.message);
      }
      const { token } = response.data;
      sessionStorage.setItem("token", token);
      navigate("/menu");
    })
    .catch((err) => console.error(err));
};

const login = (
  userLogin: Partial<UserSignUpType>,
  navigate: NavigateFunction
) => {
  axios
    .post(`${BASE_URL}/login`, { ...userLogin })
    .then(({ data }) => {
      const { token } = data;
      sessionStorage.setItem("token", token);
      navigate("/menu");
    })

    .catch((err) => console.error(err));
};

const logout = (navigate: NavigateFunction) => {
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
      navigate("/connexion");
    })

    .catch((err) => console.error(err));
};

export const authFetch = {
  signup,
  login,
  logout,
};
