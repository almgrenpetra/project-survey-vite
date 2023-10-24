import React from "react";

export const Treatment = ({ updateSurveyData, value }) => {
  const treatment = (e) => updateSurveyData("treatment", e.target.value);

  return (
    <>
      <p>Did you book any treatments during your stay?</p>
      <select value={value} onChange={treatment}>
        <option value="">Select a treatment</option>
        <option value="option_1">Option 1</option>
        <option value="option_2">Option 2</option>
        <option value="option_3">Option 3</option>
      </select>
    </>
  );
};
