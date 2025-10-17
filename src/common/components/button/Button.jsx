import React from "react";

function Button({ className, name, image ,onClick}) {
  const basicStyle = "p-2 px-3 rounded-sm ";
  return (
    <>
      <button className={`${basicStyle} ${className}`} onClick={onClick}>
        {" "}
        <div className="text-center flex items-center justify-center w-full">
          {image && <img className="text-center w-9 h-5" src={image} alt="" />}

          {name}
        </div>
      </button>
    </>
  );
}

export default Button;
