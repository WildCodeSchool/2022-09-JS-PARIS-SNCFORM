import React, { Dispatch, SetStateAction, useRef } from "react";
import { UserSignUpType } from "src/type/index";
import "./Field.scss";

type FieldType = {
  inputType?: string;
  inputId: string;
  label: string;
  isRequire?: boolean;
  onChange: Dispatch<SetStateAction<UserSignUpType>>;
  autoComplete?: string;
};

export const Field: React.FC<FieldType> = ({
  inputType = "text",
  inputId,
  label,
  isRequire,
  onChange,
  autoComplete,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const labelField = isRequire ? `${label} *` : label;
  const handleChange = () => {
    onChange((prev) => {
      return { ...prev, [inputId]: inputRef.current?.value };
    });
  };
  return (
    <div className="field">
      <label htmlFor={inputId}>{labelField}</label>
      <input
        type={inputType}
        id={inputId}
        name={inputId}
        onChange={handleChange}
        ref={inputRef}
        required={isRequire}
        autoComplete={autoComplete}
      />
    </div>
  );
};
