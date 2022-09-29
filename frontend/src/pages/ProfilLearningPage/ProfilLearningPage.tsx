import React from "react";
import { LearningCard, useProfilContext } from "@components/index";
import { learningsByStatus } from "@tools/index";
import "./ProfilLearningPage.scss";

export const ProfilLearningPage: React.FC = () => {
  const { userLearnings } = useProfilContext();

  const learningsRegistered = learningsByStatus(userLearnings, "registered");
  const learningsCompleted = learningsByStatus(userLearnings, "completed");
  const learningsInProgess = learningsByStatus(userLearnings, "inProgress");

  return (
    <div className="profile-learning">
      <LearningCard
        cardTitle="Formations en cours"
        items={learningsInProgess}
      />
      <LearningCard
        cardTitle="Formations inscrites"
        items={learningsRegistered}
      />
      <LearningCard
        cardTitle="Formations complétées"
        items={learningsCompleted}
      />
    </div>
  );
};
