import React from "react";
import "./LearningDisplayList.scss";
import { LearningDisplay } from "@components/index";
import { LearningType } from "@type/index";

type LearningDisplayListProps = {
  learningList: LearningType[];
};

export const LearningDisplayList: React.FC<LearningDisplayListProps> = ({
  learningList,
}) => {
  return (
    <div className="learning-display-list">
      {!!learningList.length &&
        learningList.map((learning) => (
          <LearningDisplay key={learning.id} learning={learning} />
        ))}
    </div>
  );
};
