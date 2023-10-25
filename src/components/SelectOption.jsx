import React from "react";

export const SelectOption = ({
  className,
  header,
  array,
  selected,
  setSelected,
}) => {
  return (
    <>
      <h3>{header}</h3>
      <select
        className={className}
        onChange={(event) => setSelected(event.target.value)}
        value={selected}
      >
        {array.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};
