import axios from "axios";
import { SetStateType, UserType } from "@type/index";
import { useHearders } from "@tools/utils";

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

const getUserProfilById = (
  userId: number,
  setState: SetStateType<UserType | null>
) => {
  const { headers } = useHearders();

  return axios
    .get(`${BASE_URL}/users/${userId}/profil`, { headers })
    .then(({ data }) => {
      setState(data);
    })
    .catch((err) => console.error(err));
};

const editUser = (user: Partial<UserType> | null) => {
  const { headers } = useHearders();
  return axios
    .put(`${BASE_URL}/users/${user?.id}`, { ...user }, { headers })
    .then(({ data }) => {
      const { token } = data;
      sessionStorage.setItem("token", token);
    })
    .catch((err) => console.error(err));
};

export const userFetch = {
  getUserByRole,
  getUserProfilById,
  editUser,
};
