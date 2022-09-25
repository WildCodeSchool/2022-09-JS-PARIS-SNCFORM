import axios from "axios";
import { CategoryType, SetStateType } from "@type/index";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const getAllCategory = (setState: SetStateType<CategoryType[]>) => {
  const token = sessionStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  axios
    .get(`${BASE_URL}/categories`, { headers })
    .then(({ data }) => setState(data))
    .catch((err) => console.error(err));
};

export const categoryFetch = {
  getAllCategory,
};
