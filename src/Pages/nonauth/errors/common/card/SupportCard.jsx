import React from "react";

function SupportCard({ icon, title, subtitle, contactText, onContact }) {
  return (
    <div className="bg-tertiary min-w-[512px] p-5 flex space-y-2 flex-col justify-center items-center min-h-[168px]  shadow-md">
      <h1 className="font-semibold text-lg">{title}</h1>
      <h1 className="text-center text-sm">{subtitle}</h1>
      <div
        onClick={onContact}
        className="flex gap-x-2 items-center cursor-pointer hover:scale-105 transition-transform"
      >
        <img className="w-5 h-5" src={icon} alt="icon" />
        <h1 className="text-primary font-medium">{contactText}</h1>
      </div>
    </div>
  );
}

export default SupportCard;
