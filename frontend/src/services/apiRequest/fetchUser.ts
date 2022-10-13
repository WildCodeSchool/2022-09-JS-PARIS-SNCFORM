import axios from "axios";
import { SetStateType, UserType } from "@type/index";
import { tokenApp, useHeaders } from "@tools/utils";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const getUserByRole = (role: string, setState: SetStateType<UserType[]>) => {
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
    .catch((err) => {
      setState(null);
      console.error(err);
    });
};

const editUser = (
  user: Partial<UserType> | null,
  setMessage: SetStateType<{ status: string; message: string } | null>
) => {
  const { token } = tokenApp();

  const headers = {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${token}`,
  };

  return axios
    .put(`${BASE_URL}/users/${user?.id}`, { ...user }, { headers })
    .then(({ data }) => {
      const { token: newToken, messageSuccess } = data;
      setMessage(messageSuccess);
      sessionStorage.setItem("token", newToken);
    })
    .catch((err) => {
      const messageError = err.response.data.message;
      setMessage(messageError);
      console.error(err);
    });
};

export const userFetch = {
  getUserByRole,
  getUserById,
  editUser,
};
