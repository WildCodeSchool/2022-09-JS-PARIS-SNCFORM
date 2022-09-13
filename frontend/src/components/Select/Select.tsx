import React, { useRef } from "react";
import { SetUserSignUp } from "@pages/SignUpPage/SignUpPage";
import "./Select.scss";

type SelectType = {
  onChange: SetUserSignUp;
  selectLabel: string;
  selectId: string;
  options: { value: string; label: string }[];
};

export const Select: React.FC<SelectType> = ({
  onChange,
  selectLabel,
  selectId,
  options,
}) => {
  const selectRef = useRef<HTMLSelectElement>(null);

  const onChangeSelect = () => {
    onChange((prev) => {
      return { ...prev, jobType: selectRef.current?.value };
    });
  };

  return (
    <div className="select">
      <label htmlFor={selectId}>{`${selectLabel} *`}</label>
      <select
        ref={selectRef}
        name={selectId}
        id={selectId}
        onChange={onChangeSelect}
      >
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};
