import React from "react";
import "./ErrorMessage.scss";

type ErrorMessageProps = {
  errors: string[];
};
export const ErrorMessage: React.FC<ErrorMessageProps> = ({ errors }) => {
  return (
    <div className="error-container">
      {errors?.map((errorString) => (
        <p key={errorString} className="error-container__message">
          {errorString}
        </p>
      ))}
    </div>
  );
};
