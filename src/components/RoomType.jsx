import React from "react";

export const RoomType = ({ updateSurveyData, valueKey ,  value }) => {
  const save = (e) => updateSurveyData(valueKey, e.target.value);

  return (
    <div>
      <p>Which room did you stay in?</p>
      <select value={value} onChange={save}>
        <option value="">Select a room</option>
        <option value="option_1">Option 1</option>
        <option value="option_2">Option 2</option>
        <option value="option_3">Option 3</option>
      </select>
    </div>
  );
};
