import axios from "axios";
import { SetStateType, UserType } from "@type/index";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const getUserByRole = (role: string, setState: SetStateType<UserType>) => {
  axios
    .get(`${BASE_URL}/users/role/${role}`)
    .then(({ data }) => setState(data))
    .catch((err) => console.error(err));
};

export const userFetch = {
  getUserByRole,
};
