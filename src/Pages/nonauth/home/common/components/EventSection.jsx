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
    <section className="w-full relative z-10 bg-gradient-to-r from-[#FFFBEB] to-[#FFF7ED]B] px-[48px]  py-16">
      <div className="w-full  px-4 ">
        <div className="flex justify-center  flex-col items-center space-y-6 mb-12">
          <div className="w-50 h-10 bg-tertiaryDark mt-5 flex items-center justify-center rounded-md">
            <p className="font-roboto font-semibold text-[15.25px] leading-[17.5px] tracking-normal text-center align-middle text-secondary">
              Limited Time Offer
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 text-center">
            Celebrate Diwali with Our <span className="text-primary">Special Collection</span>
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-orange-500 text-center">
          </h3>
          <p className="text-xl font-light text-gray-600 text-center max-w-lg">
            Illuminate your festivities with our handcrafted sweets perfect for sharing joy with family and friends
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center ">
          {diwaliProducts.map((product) => (
            <div key={product.id} className="bg-white max-w-[405.328125px] max-h-[569.328125px]  rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 relative group">
              <div className="relative   p-6 rounded-xl">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
                <div className="flex justify-end items-center mb-4">
                  <button className="bg-primary hover:bg-orange-600 text-white px-6 py-2 rounded-md font-semibold transition-colors">
                    See More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bulk Order Benefits Section */}
        <div className="mt-16 bg-primary max-w-[1280px] m-auto rounded-xl p-5 ">
          <div className="space-y-3">
            <h3 className="text-2xl md:text-2xl font-bold text-white text-left">
              Bulk Order Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-y-3">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <FaCheckCircle className="w-4 h-4 text-white" />
                </div>
                <p className="text-white font-medium">20% off on orders above 50 boxes</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <FaCheckCircle className="w-4 h-4 text-white" />
                </div>
                <p className="text-white font-medium">Custom branding options available</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <FaCheckCircle className="w-4 h-4 text-white" />
                </div>
                <p className="text-white font-medium">Free delivery within city limits</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <FaCheckCircle className="w-4 h-4 text-white" />
                </div>
                <p className="text-white font-medium">Dedicated corporate gift consultant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
