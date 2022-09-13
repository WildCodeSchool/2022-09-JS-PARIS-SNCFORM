import React from "react";
import "./Button.scss";

type ButtonType = {
  textButton: string;
};

export const Button: React.FC<ButtonType> = ({ textButton }) => {
  return (
    <button type="button" className="button">
      {textButton}
    </button>
  );
};
