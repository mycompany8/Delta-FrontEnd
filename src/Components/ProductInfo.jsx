import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function ProductInfo({ product }) {
  const [selectedSize, setSelectedSize] = useState(0);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i < Math.floor(rating) ? "text-orange-400" : "text-gray-300"}
        />
      );
    }
    return stars;
  };

  return (
    <div className="bg-white">
      {/* Product Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {product.name}
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        {product.description}
      </p>

      {/* Rating and Reviews */}
      <div className="flex items-center mb-4">
        <div className="flex items-center mr-4">
          {renderStars(product.rating)}
        </div>
        <span className="text-lg font-semibold text-gray-800">
          {product.rating} · {product.reviewCount} reviews
        </span>
      </div>

      {/* Features */}
      <div className="space-y-2 mb-8">
        {product.features.map((feature, index) => (
          <div key={index} className="flex items-center text-gray-600">
            <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </div>
        ))}
      </div>

      {/* Size Options */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Size Options</h3>
        <div className="flex space-x-4">
          {product.sizes.map((size, index) => (
            <button
              key={index}
              onClick={() => setSelectedSize(index)}
              className={`px-6 py-3 rounded-lg border-2 transition-all duration-200 ${
                selectedSize === index
                  ? "border-orange-500 bg-orange-50 text-orange-700"
                  : "border-gray-300 hover:border-gray-400 text-gray-700"
              }`}
            >
              <div className="text-center">
                <div className="font-semibold">{size.name}</div>
                <div className="text-sm text-gray-500">{size.description}</div>
                <div className="text-lg font-bold text-orange-500 mt-1">{size.price}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Enquire Now Button */}
      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl">
        Enquire Now
      </button>
    </div>
  );
}


