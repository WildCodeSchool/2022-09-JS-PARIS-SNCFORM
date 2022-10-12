import { Button, InfoMessage } from "@components/index";
import { userLearningFetch } from "@services/index";
import { tokenApp } from "@tools/index";
import { LearningType, SetStateType } from "@type/index";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./LearningDetailButton.scss";

type LearningDetailButtonProps = {
  learning: LearningType;
  setMessageInfo: SetStateType<{
    status: string;
    message: string;
  } | null>;
};

export const LearningDetailButton: React.FC<LearningDetailButtonProps> = ({
  learning,
  setMessageInfo,
}) => {
  const { id } = tokenApp();

  const navigate = useNavigate();

  const backNavigate = () => navigate(-1);
  const navigateTo = (url: string) => navigate(url);

  const handleClickRegistered = () => {
    userLearningFetch.addUserLearning(id, learning.id, navigateTo);
  };

  const userLearningId = learning?.user_learning_id;
  const startLearning = learning?.start_learning;
  const handleClickStart = () => {
    userLearningFetch.editStatusUserLearning({
      userLearningId,
      statusLearning: "inProgress",
      setMessageInfo,
    });
  };
  const handleClickRemove = () => {
    userLearningFetch.deleteUserLearnings(userLearningId, backNavigate);
  };

  const handleClickEnd = () => {
    userLearningFetch.editStatusUserLearning({
      userLearningId,
      statusLearning: "completed",
      backNavigate,
      startLearning,
    });
  };

  if (learning.status === "registered") {
    return (
      <div className="btn-group">
        <Button textButton="Retirer" onClick={handleClickRemove} />
        <Button textButton="Commencer" onClick={handleClickStart} />
      </div>
    );
  }

  if (learning.status === "inProgress") {
    return <Button textButton="Terminer" onClick={handleClickEnd} />;
  }

  if (learning.status === "completed") {
    return (
      <InfoMessage
        messageInfo={{ status: "success", message: "Formation Terminée" }}
      />
    );
  }

  return <Button textButton="S'inscrire" onClick={handleClickRegistered} />;
};
