import React from "react";

export const SelectOption = ({
  className,
  question,
  value,
  valueKey,
  options,
  updateSurveyData
}) => {
  const save = (e) => updateSurveyData(valueKey, e.target.value);
  return (
    <>
      <h3>{question}</h3>
      <select
        className={className}
        onChange={save}
        value={value}
      >
        {options.map((option) => (
          <option key={option.valueKey} value={option.valueKey}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
};
