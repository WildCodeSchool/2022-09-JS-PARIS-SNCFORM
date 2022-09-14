import axios from "axios";
import { SetJobGradeType } from "@pages/index";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const getAllGrade = (setState: SetJobGradeType) => {
  axios
    .get(`${BASE_URL}/grades`)
    .then(({ data }) => setState(data))
    .catch((err) => console.error(err));
};

export const gradeFetch = {
  getAllGrade,
};
