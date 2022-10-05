import axios from "axios";
import { useHeaders } from "@tools/utils";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const addUserLearning = (
  userId: number | undefined,
  learningId: string | undefined
) => {
  const { headers } = useHeaders();
  axios
    .get(`${BASE_URL}/user-learnings/${userId}/${learningId}`, { headers })
    .then(({ data }) => data)
    .catch((err) => console.error(err));
};

export const userLearningFetch = {
  addUserLearning,
};
