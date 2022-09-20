import axios from "axios";
import { CategoryType, SetStateType } from "@type/index";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const getAllCategory = (setState: SetStateType<CategoryType[]>) => {
  axios
    .get(`${BASE_URL}/categories`)
    .then(({ data }) => setState(data))
    .catch((err) => console.error(err));
};

export const categoryFetch = {
  getAllCategory,
};
