import React from "react";
import Button from "../../components/button/Button";
import SupportCard from "../../../Pages/nonauth/errors/common/card/SupportCard";

function ErrorLayOut({
  bgImage,
  code = "404",
  title = "Page Not Found",
  description = "It looks like this page crumbled away! Don’t worry, our fresh baked goods are still waiting for you at home.",
  buttons = [],
  icons = [],
  support = null,
  img,
}) {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="w-screen h-screen bg-center bg-cover relative flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-white/85"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-4 px-4 sm:px-8">
          <img className="w-10 h-10 rounded-full " src={img} alt="" />
          <h1 className="text-5xl sm:text-9xl font-extrabold text-primary drop-shadow-lg">
            {code}
          </h1>
          <h1 className="text-lg sm:text-4xl  text-black font-bold">{title}</h1>

          <p className="text-black text-sm font-semibold sm:text-base max-w-md sm:max-w-xl leading-relaxed">
            {description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-2">
            {buttons.map((btn, i) => (
              <Button
                key={i}
                className="hover:bg-primary border-2 font-semibold border-black hover:border-primary"
                name={btn.name}
                onClick={btn.onClick}
              />
            ))}
          </div>

          {icons.length > 0 && (
            <div className="flex flex-wrap justify-center gap-5 mt-6">
              {icons.map((icon, i) => (
                <div key={i} className="flex flex-col items-center space-y-1">
                  <img
                    className="w-10 h-10 sm:w-12 sm:h-12"
                    src={icon.src}
                    alt="icon"
                  />
                  <h1 className="text-sm text- font-semibold">{icon.label}</h1>
                </div>
              ))}
            </div>
          )}
          {support && (
            <div className="mt-6">
              <SupportCard
                icon={support.icon}
                title={support.title}
                subtitle={support.subtitle}
                contactText={support.contactText}
                onContact={support.onContact}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ErrorLayOut;
