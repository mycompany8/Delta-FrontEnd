import React from "react";

function Input({ className, placeholder }) {
  const basicStyle = "border border-neutral-gray3 rounded-sm p-1";

  return (
    <input
      placeholder={placeholder}
      type="text"
      className={`${basicStyle} ${className}`}
    />
  );
}

export default Input;
