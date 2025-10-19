import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function DiwaliSection() {
  const diwaliProducts = [
    {
      id: 1,
      name: "Deluxe Gift Box",
      description: "Premium assortment of traditional sweets and pastries",
      price: "₹99.99",
      image: "/Images/home-first.jpg",
      features: ["Traditional Sweets", "Premium Packaging", "Festive Collection"]
    },
    {
      id: 2,
      name: "Deluxe Gift Box",
      description: "Premium assortment of traditional sweets and pastries",
      price: "₹99.99",
      image: "/Images/home-first.jpg",
      features: ["Traditional Sweets", "Premium Packaging", "Festive Collection"]
    },
    {
      id: 3,
      name: "Deluxe Gift Box",
      description: "Premium assortment of traditional sweets and pastries",
      price: "₹99.99",
      image: "/Images/home-first.jpg",
      features: ["Traditional Sweets", "Premium Packaging", "Festive Collection"]
    }
  ];

  return (
    <section className="w-full relative z-10 bg-gradient-to-r from-[#FFFBEB] to-[#FFF7ED] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-12 md:py-16">
      <div className="w-full">
        <div className="flex justify-center flex-col items-center space-y-3 sm:space-y-4 md:space-y-6 mb-8 sm:mb-10 md:mb-12">
          <div className="w-40 sm:w-50 h-8 sm:h-10 bg-tertiaryDark mt-2 sm:mt-3 md:mt-5 flex items-center justify-center rounded-md">
            <p className="font-roboto font-semibold text-xs sm:text-sm md:text-[15.25px] leading-[17.5px] tracking-normal text-center align-middle text-secondary">
              Limited Time Offer
            </p>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 text-center">
            Celebrate Diwali with Our <span className="text-primary">Special Collection</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-gray-600 text-center max-w-lg px-4">
            Illuminate your festivities with our handcrafted sweets perfect for sharing joy with family and friends
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {diwaliProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl max-h-[561.34375px] shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative sm:min-h-[405.328125px] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full sm:min-h-[405.328125px] object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="bg-orange-100 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    Diwali Special
                  </span>
                  <button className="bg-primary hover:bg-orange-600 text-white px-4 py-2 rounded-md font-semibold transition-colors">
                    See More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bulk Order Benefits Section */}
        <div className="mt-8 sm:mt-12 md:mt-16 bg-primary max-w-[1280px] m-auto rounded-xl p-3 sm:p-4 md:p-5">
          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white text-left">
              Bulk Order Benefits
            </h3>
            <div className="grid grid-cols-1 gap-y-2 sm:gap-y-3">
              <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                <div className="flex-shrink-0">
                  <FaCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <p className="text-white font-medium text-sm sm:text-base">20% off on orders above 50 boxes</p>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                <div className="flex-shrink-0">
                  <FaCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <p className="text-white font-medium text-sm sm:text-base">Custom branding options available</p>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                <div className="flex-shrink-0">
                  <FaCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <p className="text-white font-medium text-sm sm:text-base">Free delivery within city limits</p>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                <div className="flex-shrink-0">
                  <FaCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <p className="text-white font-medium text-sm sm:text-base">Dedicated corporate gift consultant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
