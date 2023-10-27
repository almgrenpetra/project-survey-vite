import React from "react";

export const TextInput = ({
  className,
  question,
  value,
  valueKey,
  updateSurveyData
}) => {
  const save = (e) => updateSurveyData(valueKey, e.target.value);
  return (
    <>
      <h3>{question}</h3>
      <label>
        {className === "textarea" ? ( 
          <textarea
            className={className}
            value={value}
            onChange={save}
          />
        ) : (
          <input
            className={className}
            type={className === "textarea" ? "text" : "textarea"} 
            value={value}
            onChange={save}
          />
        )}
      </label>
    </>
  );
};

