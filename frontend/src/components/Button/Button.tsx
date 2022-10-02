import React from "react";
import "./Button.scss";

type ButtonType = {
  textButton: string;
  onClick?: () => void;
  isSubmit?: boolean;
};

export const Button: React.FC<ButtonType> = ({
  textButton,
  onClick,
  isSubmit,
}) => {
  return (
    <button
      type={isSubmit ? "submit" : "button"}
      onClick={onClick}
      className="button"
    >
      {textButton}
    </button>
  );
};
