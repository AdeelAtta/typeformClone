import React from "react";

const RadioInput = ({id,name,value,onChange,checked,children}) => {
  return (
    <label className="flex items-center justify-center gap-2 cursor-pointer group">
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
        className="size-5 border-gray-300 text-black-500 group-hover:bg-gray-600 cursor-pointer"
      />{value}
    </label>
  );
};

export default RadioInput;
