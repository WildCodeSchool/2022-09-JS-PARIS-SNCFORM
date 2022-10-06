import { LearningType, SetStateType } from "@type/index";
import axios from "axios";
import { tokenApp, useHeaders } from "@tools/utils";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;
const getLearningsByIdAndUserId = (
  learningId: string | undefined,
  setState: SetStateType<LearningType | null>,
  userId: number | undefined
) => {
  const { token } = tokenApp();

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  axios
    .get(`${BASE_URL}/learnings/${learningId}/user/${userId}`, { headers })
    .then(({ data }) => setState(data))
    .catch((err) => console.error(err));
};

const getLearningsById = (
  learningId: string | undefined,
  setState: SetStateType<LearningType | null>,
  userId?: number
) => {
  const { token } = tokenApp();

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  let url = `${BASE_URL}/learnings/${learningId}`;
  if (userId) url += `/user/${userId}`;
  axios
    .get(url, { headers })
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
  getLearningsByIdAndUserId,
};
