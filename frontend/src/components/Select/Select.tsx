import React, { useRef } from "react";
import { SetUserSignUpType } from "@pages/index";
import "./Select.scss";

type SelectType = {
  onChange: SetUserSignUpType;
  label: string;
  selectId: string;
  options: { id: number; name: string }[];
  isRequire?: boolean;
  errors?: string[] | null;
};

export const Select: React.FC<SelectType> = ({
  onChange,
  label,
  selectId,
  options,
  isRequire,
  errors,
}) => {
  const selectRef = useRef<HTMLSelectElement>(null);

  const onChangeSelect = () => {
    if (selectRef.current) {
      const { value } = selectRef.current;
      onChange((prev) => {
        return { ...prev, [selectId]: parseInt(value, 10) };
      });
    }
  };
  const labelField = isRequire ? `${label} *` : label;

  return (
    <div className="select">
      <label htmlFor={selectId}>{labelField}</label>
      <select
        ref={selectRef}
        name={selectId}
        id={selectId}
        onChange={onChangeSelect}
      >
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
      <div className="select__errors-container">
        {errors?.map((errorString) => (
          <p className="select__errors" key={null}>
            {errorString}
          </p>
        ))}
      </div>
    </div>
  );
};
