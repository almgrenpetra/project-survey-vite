import React from "react";

export const Comments = ({ value, valueKey, updateSurveyData }) => {
  const save = (e) => updateSurveyData(valueKey, e.target.value);

  return (
    <>
      <p>
        Please let us know if there is anything else that you want to share with
        us.
      </p>
      <input type="text" value={value} onChange={save} />
    </>
  );
};
