import React from "react";

function CustomerReview({ title, subtitle, reviews }) {
  return (
    <div className="w-[100vw] p-9">
      <div className=" bg-tertiary flex flex-col h-[428px]">
        {/* Header */}
        <div className="h-1/3 flex flex-col justify-center items-center text-center">
          <h1 className="text-xl font-semibold">{title}</h1>
          <h1 className="text-base">{subtitle}</h1>
        </div>

        {/* Reviews */}
        <div className="h-2/3 grid grid-cols-3 place-items-center">
          {reviews?.map((review, index) => (
            <div
              key={index}
              className="bg-white h-[204px] p-3 space-y-4 rounded-md w-[378.65625px] flex flex-col justify-center"
            >
              <div className="flex items-center gap-x-3">
                <h1>icon</h1>
                <div>
                  <h1 className="text-lg font-medium">{review.name}</h1>
                  <h1 className="text-sm">{review.date}</h1>
                </div>
              </div>
              <div>
                <p className="text-base">{review.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomerReview;
