import React from "react";

function SelectBox({ placeholder, className }) {
  const basicStyle =
    "text-neutral-gray1  font-light appearance-none  p-2  border border-neutral-gray3  text-xs rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500  transition duration-200";

  return (
    <select
      name=""
      placeholder={placeholder}
      type="select"
      className={`${basicStyle} ${className}`}
      id=""
    >
      <option value="">
        <h1>Sort by Name</h1>
      </option>
      <option value="">
        <h1 className="text-neutral-gray3">Sort by Name</h1>
      </option>
    </select>
  );
}

export default SelectBox;
