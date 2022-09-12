import React from "react";
import "./Field.scss";

type FieldType = {
  inputType?: string;
  inputName: string;
  inputId: string;
  label: string;
  isRequire?: boolean;
};

export const Field: React.FC<FieldType> = ({
  inputType = "text",
  inputName,
  inputId,
  label,
  isRequire,
}) => {
  const labelField = isRequire ? `${label} *` : label;
  return (
    <div className="field">
      <label htmlFor={inputId}>{labelField}</label>
      <input type={inputType} id={inputId} name={inputName} />
    </div>
  );
};
