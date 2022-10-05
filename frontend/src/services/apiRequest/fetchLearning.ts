import { LearningType, SetStateType } from "@type/index";
import axios from "axios";
import { tokenApp, useHeaders } from "@tools/utils";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const getLearningsById = (
  learningId: string | undefined,
  setState: SetStateType<LearningType | null>
) => {
  const { token } = tokenApp();

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  axios
    .get(`${BASE_URL}/learnings/${learningId}`, { headers })
    .then(({ data }) => setState(data))
    .catch((err) => console.error(err));
};

const fetchByCatAndUserGrade = (
  categoryId: string,
  gradeId: number,
  userId: number,
  setState: SetStateType<LearningType[] | null>
) => {
  const { headers } = useHeaders();

  axios
    .get(`${BASE_URL}/learnings/${categoryId}/${gradeId}/user/${userId}`, {
      headers,
    })
    .then(({ data }) => setState(data))
    .catch((err) => console.error(err));
};

const fetchUserLearnings = (
  id: number,
  setState: SetStateType<Partial<LearningType>[] | null>
) => {
  const { headers } = useHeaders();

  axios
    .get(`${BASE_URL}/user-learnings/${id}`, { headers })
    .then(({ data }) => setState(data))
    .catch((err) => console.error(err));
};

const fetchByJobAndGrade = (
  jobId: number | undefined,
  gradeId: number | undefined,
  setState: SetStateType<LearningType[] | null>
) => {
  const { headers } = useHeaders();

  axios
    .get(`${BASE_URL}/learnings/job/${jobId}/grade/${gradeId}`, { headers })
    .then(({ data }) => setState(data))
    .catch((err) => console.error(err));
};

export const learningFetch = {
  getLearningsById,
  fetchByCatAndUserGrade,
  fetchUserLearnings,
  fetchByJobAndGrade,
};
