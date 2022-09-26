import { LearningType, SetStateType } from "@type/index";
import axios from "axios";
import { tokenApp } from "@tools/utils";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const fetchByCatAndUserGrade = (
  categoryId: string,
  setState: SetStateType<LearningType[] | null>
) => {
  const { token, user } = tokenApp();

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  axios
    .get(`${BASE_URL}/learnings/${categoryId}/${user?.grade_id}`, { headers })
    .then(({ data }) => setState(data))
    .catch((err) => console.error(err));
};

export const learningFetch = {
  fetchByCatAndUserGrade,
};
