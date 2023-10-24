import React from "react";

export const Name = ({ value, updateSurveyData }) => {
  const name = (e) => updateSurveyData("name", e.target.value);

  return (
    <>
      <p>What is your name?</p>
      <label>Name:</label>
      <input type="text" value={value} onChange={name} />
    </>
  );
};
