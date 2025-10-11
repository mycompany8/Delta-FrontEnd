import React from "react";

function ProductAboutDetails({
  aboutTitle,
  aboutParagraphs = [],
  ingredients = [[], []], // two-column array
  allergenTitle,
  allergenInfo,
  storageTitle,
  storageItems = [],
  name
}) {
  return (
  <div>
      <div className="space-y-6 h-full leading-relaxed">
      {/* About Section */}
      <div className="space-y-3 w-full h  leading-relaxed">
        <h1 className=" text-2xl sm:text-3xl font-semibold">{aboutTitle}</h1>
        {aboutParagraphs.map((text, idx) => (
          <p key={idx} className=" tetx-base sm:text-lg   font-light">
            {text}
          </p>
        ))}
      </div>

      {name === "product" && (
        <div className="space-y-4">
          {/* ingredient*/}
          <div className="space-y-3">
            <h1 className="text-lg font-semibold">Ingredients</h1>
            <div className="flex gap-x-4 space-y-6 sm:text-base text-sm ">
              {ingredients.map((column, colIdx) => (
                <div key={colIdx}>
                  {column.map((item, idx) => (
                    <div key={idx} className="flex space-y-3 gap-x-2">
                      <h1>icon</h1>
                      <h1 className=" text-sm sm:text-lg">{item}</h1>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* allergyyy */}
          <div>
            <div className="h-[136px] flex items-center px-5 bg-tertiary">
              <div className="space-y-3">
                <div className="flex gap-x-2">
                  <h1>icon</h1>
                  <h1 className="">{allergenTitle}</h1>
                </div>
                <p >{allergenInfo}</p>
              </div>
            </div>
          </div>

          {/* stregee */}
          <div className="space-y-3">
            <h1 className="text-lg font-medium space-y-6">{storageTitle}</h1>
            <div className="space-y-1">
              {storageItems.map((item, idx) => (
                <div key={idx} className="flex gap-x-2">
                  <h1>icon</h1>
                  <h1>{item}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
  );
}

export default ProductAboutDetails;
