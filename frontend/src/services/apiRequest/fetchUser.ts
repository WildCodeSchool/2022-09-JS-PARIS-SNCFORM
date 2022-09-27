import jwtDecode from "jwt-decode";
import axios from "axios";
import { UserType, SetStateType, UserEditType } from "@type/index";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const getUserByRole = (role: string, setState: SetStateType<UserType>) => {
  axios
    .get(`${BASE_URL}/users/role/${role}`)
    .then(({ data }) => setState(data))
    .catch((err) => console.error(err));
};

const getUserById = (setState: SetStateType<UserEditType | null>) => {
  const token = sessionStorage.getItem("token");
  if (!token) {
    return false;
  }
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  const decoded = jwtDecode(token);
  return axios
    .get(`${BASE_URL}/users/${decoded.sub}`, { headers })
    .then(({ data }) => {
      const user = {
        id: data[0].id,
        firstName: data[0].first_name,
        lastName: data[0].last_name,
        email: data[0].email,
        hashedPassword: data[0].hashedPassword,
        newPassword: data[0].new_password,
        oldPassword: data[0].old_password,
      };
      setState(user);
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
  axios
    .post(`${BASE_URL}/users/${user.id}`, { ...user }, { headers })
    .then(({ data }) => setState(data))
    .catch((err) => console.error(err));
};

export const userFetch = {
  getUserByRole,
  getUserById,
  editUser,
};
