import { learningFetch, userLearningFetch } from "@services/index";
import { LearningType } from "@type/learningTypes";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { tokenApp } from "@tools/utils";
import "./LearningDetailPage.scss";
import { Button } from "@components/index";

export const LearningDetailPage: React.FC = () => {
  const [learning, setLearning] = useState<LearningType | null>(null);
  const { learningId } = useParams();
  const { id } = tokenApp();

  useEffect(() => {
    learningFetch.getLearningsById(learningId, setLearning);
  }, []);

  const handleClick = () => {
    userLearningFetch.addUserLearning(id, learningId);
  };
  return learning ? (
    <div>
      <h2>{learning.title}</h2>
      <p>{`${learning.start_registration} au ${learning.end_registration}`}</p>
      <div>
        <h4>Description de la formation</h4>
        {learning.description}
      </div>
      <h4>{learning.instructor}</h4>
      <Button textButton="S'inscrire" onClick={handleClick} />
    </div>
  ) : (
    <h2>Formation non trouvée</h2>
  );
};
