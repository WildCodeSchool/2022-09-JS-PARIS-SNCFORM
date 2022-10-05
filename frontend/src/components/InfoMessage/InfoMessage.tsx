import React from "react";
import "./InfoMessage.scss";

type InfoMessageProps = {
  messageInfo: { status: string; message: string };
};

export const InfoMessage: React.FC<InfoMessageProps> = ({ messageInfo }) => {
  const { status, message } = messageInfo;
  return (
    <div className={`info-message info-message--${status}`}>
      <p>{message}</p>
    </div>
  );
};
