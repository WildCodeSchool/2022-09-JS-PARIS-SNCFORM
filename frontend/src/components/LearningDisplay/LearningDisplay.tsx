import React from "react";
import "./LearningDisplay.scss";

type LearningDisplayProps = {
  title: string;
  type: string;
  capacityLearner: number;
};

export const LearningDisplay: React.FC<LearningDisplayProps> = ({
  title,
  type,
  capacityLearner,
}) => {
  return (
    <div className="learning-display">
      <h3>{title}</h3>
      <div className="learning-display__bottom">
        <span>{type}</span>
        <span>{capacityLearner} Personnes</span>
      </div>
    </div>
  );
};
