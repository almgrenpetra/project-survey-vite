import React from "react";

export const Duration = ({ updateSurveyData, value }) => {
  const duration = (event) => updateSurveyData("duration", event.target.value);
  return (
    <>
      <p>How long did you stay at the Balance?</p>
      <label>
        <input
          type="radio"
          value="1-7 days"
          onChange={duration}
          checked={value === "1-7 days"}
        />
        1-7 days
      </label>
      <label>
        <input
          type="radio"
          value="8-14 days"
          onChange={duration}
          checked={value === "8-14 days"}
        />
        8-14 days
      </label>
      <label>
        <input
          type="radio"
          value="15-19 days"
          onChange={duration}
          checked={value === "15-19 days"}
        />
        15-19 days
      </label>
      <label>
        <input
          type="radio"
          value="more than 19 days"
          onChange={duration}
          checked={value === "more than 19 days"}
        />
        more than 19 days
      </label>
    </>
  );
};
