import React from "react";
import "./Button.scss";

type ButtonType = {
  textButton: string;
  onClick: () => void;
};

export const Button: React.FC<ButtonType> = ({ textButton, onClick }) => {
  return (
    <button type="button" onClick={onClick} className="button">
      {textButton}
    </button>
  );
};
