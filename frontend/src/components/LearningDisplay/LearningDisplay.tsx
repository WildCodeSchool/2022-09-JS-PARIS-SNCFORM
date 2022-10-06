import { LearningType } from "@type/index";
import React from "react";
import { Link } from "react-router-dom";
import "./LearningDisplay.scss";

type LearningDisplayProps = {
  learning: LearningType;
};

export const LearningDisplay: React.FC<LearningDisplayProps> = ({
  learning,
}) => {
  const {
    title,
    type,
    capacity_learner: capacityLearner,
    duration,
    id,
  } = learning;
  return (
    <div className="learning-display">
      <Link to={`/formations/detail-formations/${id}`}>
        <h3>{title}</h3>
      </Link>
      <div className="learning-display__bottom">
        <span>{type}</span>
        <span>{duration} Jour(s)</span>
        <span>{capacityLearner} Places</span>
      </div>
    </div>
  );
};
