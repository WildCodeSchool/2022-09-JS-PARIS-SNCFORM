import { EyeSlashIcon } from "@assets/images";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { UserSignUpType } from "src/type/index";
import "./Field.scss";

type FieldType = {
  inputType?: string;
  inputId: string;
  label?: string;
  isRequire?: boolean;
  onChange: Dispatch<SetStateAction<Partial<UserSignUpType>>>;
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
  const [isHiden, setIsHiden] = useState<boolean>(true);
  const [inputTypeState, setInputTypeState] = useState<string>(inputType);
  const labelField = isRequire ? `${label} *` : label;
  const isPassword = inputType === "password";
  const handleChange = () => {
    onChange((prev) => {
      return { ...prev, [inputId]: inputRef.current?.value };
    });
  };

  useEffect(() => {
    setInputTypeState(isPassword && !isHiden ? "text" : inputType);
  }, [isHiden]);

  const toogleInputShow = () => {
    setIsHiden((prev) => !prev);
  };

  return (
    <div className="field">
      {label && <label htmlFor={inputId}>{labelField}</label>}
      <div className="field__input">
        <input
          type={inputTypeState}
          id={inputId}
          name={inputId}
          onChange={handleChange}
          ref={inputRef}
          required={isRequire}
          autoComplete={autoComplete}
        />
        {isPassword ? <EyeSlashIcon onClick={toogleInputShow} /> : null}
      </div>
    </div>
  );
};
