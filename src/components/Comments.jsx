import React from "react";

export const Comments = ({ value, updateSurveyData }) => {
  const comments = (e) => updateSurveyData("comments", e.target.value);

  return (
    <>
      <p>
        Please let us know if there is anything else that you want to share with
        us.
      </p>
      <input type="text" value={value} onChange={comments} />
    </>
  );
};
