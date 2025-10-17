import React from "react";

function Input({ className, placeholder,handleChange,handleBlur,values,name }) {
  const basicStyle = "border border-neutral-gray3 rounded-sm p-1";

  return (
    <input
      placeholder={placeholder}
      type="text"
      className={`${basicStyle} ${className}`}
      onChange={handleChange}
      onBlur={handleBlur}
      name={name}
      value={values}
    />
  );
}

export default Input;
