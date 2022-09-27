import React, { Dispatch, SetStateAction, useRef } from "react";
import { UserSignUpType, UserSignInType, UserEditType } from "src/type/index";
import "./Field.scss";

type FieldType = {
  inputType?: string;
  inputId: string;
  label: string;
  isRequire?: boolean;
  onChange:
    | Dispatch<SetStateAction<UserSignInType>>
    | Dispatch<SetStateAction<UserSignUpType>>
    | Dispatch<SetStateAction<UserEditType>>;
  autoComplete?: string;
  value?: string;
};

export const Field: React.FC<FieldType> = ({
  inputType = "text",
  inputId,
  label,
  isRequire,
  onChange,
  autoComplete,
  value,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const labelField = isRequire ? `${label} *` : label;
  const handleChange = () => {
    onChange((prev: UserSignUpType | UserSignInType | UserEditType) => {
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
        value={value}
      />
    </div>
  );
};
