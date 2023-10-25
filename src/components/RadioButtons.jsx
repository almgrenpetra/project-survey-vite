import React from "react";

export const RadioButtons = ({
  className,
  header,
  array,
  selected,
  setSelected,
}) => {
  return (
    <>
      <h3>{header}</h3>
      <div className={className}>
        {array.map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              onChange={(event) => setSelected(event.target.value)}
              checked={selected === option}
            />
            {option}
          </label>
        ))}
      </div>
    </>
  );
};
