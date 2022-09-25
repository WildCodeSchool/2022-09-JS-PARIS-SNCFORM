import { LearningType } from "@type/index";
import React from "react";
import "./LearningDisplay.scss";

type LearningDisplayProps = {
  learning: LearningType;
};

export const LearningDisplay: React.FC<LearningDisplayProps> = ({
  learning,
}) => {
  const { title, type, capacityLearner, duration } = learning;
  return (
    <div className="learning-display">
      <h3>{title}</h3>
      <div className="learning-display__bottom">
        <span>{type}</span>
        <span>{duration} Jours</span>
        <span>{capacityLearner} Personnes</span>
      </div>
    </div>
  );
};
