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
      <div className="space-y-6 leading-relaxed">
      {/* About Section */}
      <div className="space-y-3 leading-relaxed">
        <h1 className="text-3xl font-semibold">{aboutTitle}</h1>
        {aboutParagraphs.map((text, idx) => (
          <p key={idx} className="text-lg font-light">
            {text}
          </p>
        ))}
      </div>

      {name === "product" && (
        <div className="space-y-4">
          {/* ingredient*/}
          <div className="space-y-3">
            <h1 className="text-lg font-semibold">Ingredients</h1>
            <div className="flex gap-x-4 text-base">
              {ingredients.map((column, colIdx) => (
                <div key={colIdx}>
                  {column.map((item, idx) => (
                    <div key={idx} className="flex gap-x-2">
                      <h1>icon</h1>
                      <h1 className="text-lg">{item}</h1>
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
                  <h1>{allergenTitle}</h1>
                </div>
                <p>{allergenInfo}</p>
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
