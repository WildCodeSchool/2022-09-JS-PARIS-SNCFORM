import axios from "axios";
import { CategoryType, SetStateType } from "@type/index";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const token = sessionStorage.getItem("token");
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

const getAllCategory = (setState: SetStateType<CategoryType[]>) => {
  axios
    .get(`${BASE_URL}/categories`, { headers })
    .then(({ data }) => setState(data))
    .catch((err) => console.error(err));
};

export const categoryFetch = {
  getAllCategory,
};
