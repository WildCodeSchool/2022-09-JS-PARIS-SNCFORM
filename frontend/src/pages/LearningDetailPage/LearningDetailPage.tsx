import React, { useEffect, useState } from "react";
import { learningFetch } from "@services/index";
import { LearningType } from "@type/learningTypes";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { tokenApp } from "@tools/utils";
import "./LearningDetailPage.scss";
import moment from "moment";
import { IconLink, InfoMessage, LearningDetailButton } from "@components/index";
import { ArrowBackIcon } from "@assets/index";

export const LearningDetailPage: React.FC = () => {
  const [learning, setLearning] = useState<LearningType | null>(null);
  const [messageInfo, setMessageInfo] = useState<{
    status: string;
    message: string;
  } | null>(null);

  const { learningId } = useParams();
  const { id } = tokenApp();

  const formatDate = (date: Date) => moment(date).format("DD-MM-YYYY");

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/formations")) {
      learningFetch.getLearningsById(learningId, setLearning);
    } else {
      learningFetch.getLearningsByIdAndUserId(learningId, setLearning, id);
    }
  }, [messageInfo]);

  const navigate = useNavigate();

  const handleClickIcon = () => {
    navigate(-1);
  };

  return learning ? (
    <div className="learning-detail-page">
      <IconLink
        className="icon-top-right"
        iconComponent={<ArrowBackIcon onClick={handleClickIcon} />}
        path="#"
      />
      {messageInfo && <InfoMessage messageInfo={messageInfo} />}
      <div className="learning-detail-page__body">
        <div className="learning-detail-page__header">
          <h2>{learning.title}</h2>
          {learning.start_learning ? (
            <p>{`Commencer le: ${formatDate(learning.start_learning)}`} </p>
          ) : (
            <p>{`${formatDate(learning.start_registration)} au ${formatDate(
              learning.end_registration
            )}`}</p>
          )}
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
