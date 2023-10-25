import React from "react";

export const TextInput = ({
    className,
    question,
    value,
    valueKey,
    updateSurveyData
  }) => {

  const save = (e) => updateSurveyData(valueKey, e.target.value);
  console.log(className, question, value);
  return (
    <>
      <h3>{question}</h3>
      <label>
        <input
          className={className}
          type="text"
          value={value}
          onChange={save}
        />
      </label>
    </>
  );
};
