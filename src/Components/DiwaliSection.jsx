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
    <section className="w-full relative z-10 bg-yellow-50 py-16">
      <div className="w-full px-4 md:px-[10%]">
        <div className="flex justify-center flex-col items-center space-y-4 mb-12">
          <div className="w-60 h-10 bg-amber-100 flex items-center justify-center rounded-md">
            <p className="font-roboto font-semibold text-[15.25px] leading-[17.5px] tracking-normal text-center align-middle text-orange-700">
              Limited Time Offer
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
            Celebrate Diwali with Our <span className="text-orange-500">Special Collection</span>
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-orange-500 text-center">
          </h3>
          <p className="text-lg text-gray-600 text-center max-w-2xl">
            Illuminate your festivities with our handcrafted sweets perfect for sharing joy with family and friends
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {diwaliProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 relative group">
              <div className="relative p-5 rounded-xl">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-orange-500">{product.price}</span>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-semibold transition-colors">
                    See More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bulk Order Benefits Section */}
        <div className="mt-16 bg-orange-500 rounded-xl p-8 md:p-12">
          <div className="max-w-4xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-left">
              Bulk Order Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <FaCheckCircle className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium">20% off on orders above 50 boxes</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <FaCheckCircle className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium">Custom branding options available</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <FaCheckCircle className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium">Free delivery within city limits</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <FaCheckCircle className="w-6 h-6 text-white" />
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
