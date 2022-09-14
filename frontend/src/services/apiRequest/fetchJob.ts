import axios from "axios";
import { SetJobGradeType } from "@pages/index";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const getAllJob = (setState: SetJobGradeType) => {
  axios
    .get(`${BASE_URL}/jobs`)
    .then(({ data }) => setState(data))
    .catch((err) => console.error(err));
};

export const jobFetch = {
  getAllJob,
};
