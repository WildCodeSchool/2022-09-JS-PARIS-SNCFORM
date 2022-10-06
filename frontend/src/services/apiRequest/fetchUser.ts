import axios from "axios";
import { SetStateType, UserType } from "@type/index";
import { useHeaders } from "@tools/utils";

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
  const { headers } = useHeaders();

  return axios
    .get(`${BASE_URL}/users/${userId}/profil`, { headers })
    .then(({ data }) => {
      setState(data);
    })
    .catch((err) => console.error(err));
};

const editUser = (
  user: Partial<UserType> | null,
  setMessage: SetStateType<{ status: string; message: string } | null>
) => {
  const { headers } = useHeaders();
  const formData = new FormData();
  for (const key in user) {
    if ({}.hasOwnProperty.call(user, key)) {
      formData.append(key, user[key]);
    }
  }
  // formData.append("avatar", user?.avatar);
  return axios
    .put(`${BASE_URL}/users/${user?.id}`, formData, { headers })
    .then(({ data }) => {
      const { token, messageSuccess } = data;
      setMessage(messageSuccess);
      sessionStorage.setItem("token", token);
    })
    .catch((err) => console.error(err));
};

export const userFetch = {
  getUserByRole,
  getUserById,
  editUser,
};
