import axios from "axios";
import { useHeaders } from "@tools/utils";
import moment from "moment";
import { SetStateType } from "@type/index";

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

const deleteUserLearnings = (
  userLearningId: number | undefined | null,
  backNavigate: () => void
) => {
  const { headers } = useHeaders();

  axios
    .delete(`${BASE_URL}/user-learnings/${userLearningId}`, { headers })
    .then(({ data }) => {
      console.warn(data);
      backNavigate();
    })
    .catch((err) => console.error(err));
};

type EditStatusUserLearningType = {
  userLearningId: number | undefined | null;
  statusLearning: string;
  backNavigate?: () => void;
  startLearning?: Date | undefined | null;
  setMessageInfo?: SetStateType<{
    status: string;
    message: string;
  } | null>;
};

const editStatusUserLearning = ({
  userLearningId,
  statusLearning,
  backNavigate,
  startLearning,
  setMessageInfo,
}: EditStatusUserLearningType) => {
  const { headers } = useHeaders();

  const userLearningData = {
    statusLearning,
    startLearning: startLearning || moment(Date.now()).format("YYYY-MM-DD"),
  };
  axios
    .put(`${BASE_URL}/user-learnings/${userLearningId}`, userLearningData, {
      headers,
    })
    .then(({ data }) => {
      if (setMessageInfo) setMessageInfo(data.messageSuccess);
      if (backNavigate) backNavigate();
    })
    .catch((err) => console.error(err));
};

export const userLearningFetch = {
  addUserLearning,
  deleteUserLearnings,
  editStatusUserLearning,
};
