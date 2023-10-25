import React from "react";

export const TextInput = ({ className, header, text, setText }) => {
  console.log(className, header, text);
  return (
    <>
      <h3>{header}</h3>
      <label>
        <input
          className={className}
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </label>
    </>
  );
};
