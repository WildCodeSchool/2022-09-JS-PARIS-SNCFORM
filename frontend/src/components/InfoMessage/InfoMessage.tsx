import React from "react";
import "./InfoMessage.scss";

type InfoMessageProps = {
  message: string;
};

export const InfoMessage: React.FC<InfoMessageProps> = ({ message }) => {
  return (
    <div className="info-message">
      <p>{message}</p>
    </div>
  );
};
