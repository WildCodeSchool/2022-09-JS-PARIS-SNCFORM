import axios from "axios";
import { SetStateType, UserType, UserEditType } from "@type/index";
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

const getUserById = (
  userId: number,
  setState: SetStateType<UserType | null>
) => {
  const { headers } = useHearders();

  return axios
    .get(`${BASE_URL}/users/${userId}`, { headers })
    .then(({ data }) => {
      setState(data);
    })
    .catch((err) => console.error(err));
};

const editUser = (
  user: UserEditType,
  setState: SetStateType<UserEditType | null>
) => {
  const token = sessionStorage.getItem("token");
  if (!token) {
    return false;
  }
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  return axios
    .post(`${BASE_URL}/users/${user.id}`, { ...user }, { headers })
    .then(({ data }) => setState(data))
    .catch((err) => console.error(err));
};

export const userFetch = {
  getUserByRole,
  getUserById,
  editUser,
};
