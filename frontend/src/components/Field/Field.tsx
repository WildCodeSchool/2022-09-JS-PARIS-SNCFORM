import { EyeSlashIcon } from "@assets/images";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { UserType } from "src/type/index";
import "./Field.scss";

type FieldType = {
  inputType?: string;
  inputId: string;
  label?: string;
  isRequire?: boolean;
  onChange: Dispatch<SetStateAction<Partial<UserType> | null>>;
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
  const [isHiden, setIsHiden] = useState<boolean>(true);
  const [inputTypeState, setInputTypeState] = useState<string>(inputType);
  const labelField = isRequire ? `${label} *` : label;
  const isPassword = inputType === "password";
  const handleChange = () => {
    onChange((prev) => {
      let inputValue: File | string | undefined;
      inputValue = inputRef.current?.value;
      if (inputRef.current?.type === "file") {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        inputValue = inputRef.current?.files![0];
        // console.log('inputRef.current?:', inputRef.current?.files![0])
      }
      return { ...prev, [inputId]: inputValue };
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
          placeholder={value}
        />
        {isPassword ? <EyeSlashIcon onClick={toogleInputShow} /> : null}
      </div>
    </div>
  );
};
