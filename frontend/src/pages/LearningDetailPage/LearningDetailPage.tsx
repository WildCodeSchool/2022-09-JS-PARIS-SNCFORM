import { learningFetch, userLearningFetch } from "@services/index";
import { LearningType } from "@type/learningTypes";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { tokenApp } from "@tools/utils";
import "./LearningDetailPage.scss";
import moment from "moment";
import { InfoMessage, LearningDetailButton } from "@components/index";

export const LearningDetailPage: React.FC = () => {
  const [learning, setLearning] = useState<LearningType | null>(null);
  const [messageInfo, setMessageInfo] = useState<{
    status: string;
    message: string;
  } | null>(null);

  const { learningId } = useParams();
  const { id } = tokenApp();
  const startDateFormatted = moment(learning?.start_registration).format(
    "DD-MM-YYYY"
  );
  const endDateFormatted = moment(learning?.end_registration).format(
    "DD-MM-YYYY"
  );

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/formations")) {
      learningFetch.getLearningsById(learningId, setLearning);
    } else {
      learningFetch.getLearningsByIdAndUserId(learningId, setLearning, id);
    }
  }, []);

  return learning ? (
    <div className="learning-detail-page">
      {messageInfo && <InfoMessage messageInfo={messageInfo} />}
      <div className="learning-detail-page__body">
        <div className="learning-detail-page__header">
          <h2>{learning.title}</h2>
          <p>{`${startDateFormatted} au ${endDateFormatted}`}</p>
        </div>
        <div className="learning-detail-page__description">
          <h4>Description de la formation</h4>
          {learning.description}
        </div>
        <div className="learning-detail-page__instructor">
          <h4>Instructeur : {learning.instructor}</h4>
        </div>
      </div>
      <LearningDetailButton
        learning={learning}
        setMessageInfo={setMessageInfo}
      />
    </div>
  ) : (
    <h2>Formation non trouvée</h2>
  );
};
