import React from "react";

const TextInput = ({ placeholder, value, required }) => {
  return (
    <input
      required={required}
      value={value}
      placeholder={placeholder}
      className="text-sm text-normal font-Montserrat rounded-full min-w-[322px] text-seamlessBlue-200 placeholder-seamlessBlue-200 px-6 py-3"
    ></input>
  );
};

export default TextInput;
