import { LearningType, SetStateType } from "@type/index";
import axios from "axios";
import { tokenApp, useHearders } from "@tools/utils";

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
  setState: SetStateType<LearningType[] | null>
) => {
  const { user } = tokenApp();
  const { headers } = useHearders();

  axios
    .get(`${BASE_URL}/learnings/${categoryId}/${user?.grade_id}`, { headers })
    .then(({ data }) => setState(data))
    .catch((err) => console.error(err));
};

const fetchUserLearnings = (
  id: number,
  setState: SetStateType<Partial<LearningType>[] | null>
) => {
  const { headers } = useHearders();

  axios
    .get(`${BASE_URL}/user-learnings/${id}`, { headers })
    .then(({ data }) => setState(data))
    .catch((err) => console.error(err));
};

export const learningFetch = {
  getLearningsById,
  fetchByCatAndUserGrade,
  fetchUserLearnings,
};
