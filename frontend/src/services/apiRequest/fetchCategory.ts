import axios from "axios";
import { CategoryType, SetStateType } from "@type/index";
import { useHeaders } from "@tools/index";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const getAllCategory = (setState: SetStateType<CategoryType[]>) => {
  const { headers } = useHeaders();

  axios
    .get(`${BASE_URL}/categories`, { headers })
    .then(({ data }) => setState(data))
    .catch((err) => console.error(err));
};

const getByJob = (
  jobId: number | undefined,
  setState: SetStateType<CategoryType[]>
) => {
  const { headers } = useHeaders();

  axios
    .get(`${BASE_URL}/categories/job/${jobId}`, { headers })
    .then(({ data }) => setState(data))
    .catch((err) => console.error(err));
};

export const categoryFetch = {
  getAllCategory,
  getByJob,
};
