import React from "react";

export const Name = ({ value, valueKey, updateSurveyData }) => {
  const save = (e) => updateSurveyData(valueKey, e.target.value);

  return (
    <>
      <p>What is your name?</p>
      <label>Name:</label>
      <input type="text" value={value} onChange={save} />
    </>
  );
};
