import axios from "axios";
import { SetUsersType } from "@pages/index";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const getUserByRole = (role: string, setState: SetUsersType) => {
  axios
    .get(`${BASE_URL}/users/role/${role}`)
    .then(({ data }) => setState(data))
    .catch((err) => console.error(err));
};

export const userFetch = {
  getUserByRole,
};
