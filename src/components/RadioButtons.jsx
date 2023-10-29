import React from "react";

export const RadioButtons = ({
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
      <div className={className}>
        {options.map((option) => (
          <label key={option.valueKey}>
            <input
              type="radio"
              value={option.valueKey}
              onChange={save}
              checked={value === option.valueKey}
            />
            {option.name}
          </label>
        ))}
      </div>
    </>
  );
};
