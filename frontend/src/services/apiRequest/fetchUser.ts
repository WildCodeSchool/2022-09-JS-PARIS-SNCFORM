import axios from "axios";
import { SetStateType, UserType } from "@type/index";
import { tokenApp } from "@tools/utils";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const getUserByRole = (
  role: string,
  setState: SetStateType<UserType[] | null>
) => {
  axios
    .get(`${BASE_URL}/users/role/${role}`)
    .then(({ data }) => setState(data))
    .catch((err) => console.error(err));
};

const getUserById = (
  userId: number,
  setState: SetStateType<UserType | null>
) => {
  const { token } = tokenApp();

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  axios
    .get(`${BASE_URL}/users/${userId}`, { headers })
    .then(({ data }) => setState(data))
    .catch((err) => console.error(err));
};

export const userFetch = {
  getUserByRole,
  getUserById,
};
