import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function WeddingSection() {
  const weddingProducts = [
    {
      id: 1,
      name: "Wedding Cakes",
      description: "Custom designed multi-tier cakes with your choice of flavors and decorations",
      price: "₹299.99",
      image: "/Images/home-first.jpg",
    },
    {
      id: 2,
      name: "Wedding Cakes",
      description: "Custom designed multi-tier cakes with your choice of flavors and decorations",
      price: "₹299.99",
      image: "/Images/home-first.jpg",
    },
    {
      id: 3,
      name: "Wedding Cakes",
      description: "Custom designed multi-tier cakes with your choice of flavors and decorations",
      price: "₹299.99",
      image: "/Images/home-first.jpg",
    },
  ];

  return (
    <section className="w-full relative z-10 py-16">
      <div className="w-full px-4 md:px-[10%]">
        <div className="flex justify-center flex-col items-center space-y-4 mb-12">
          <div className="w-60 h-10 bg-pink-100 flex items-center justify-center rounded-md">
            <p className="font-roboto font-semibold text-[15.25px] leading-[17.5px] tracking-normal text-center align-middle text-pink-700">
              Wedding Special
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
            Make Your Wedding Day <span className="text-pink-500">Extra Special</span>
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl">
            From elegant wedding cakes to personalized dessert tables, we create unforgettable sweet moments for your special day
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {weddingProducts.map((product) => (
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
                  <span className="text-2xl font-bold text-pink-500">{product.price}</span>
                  <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-md font-semibold transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Wedding Orders Section */}
        <div className="mt-16 bg-pink-400 rounded-xl p-8 md:p-12">
          <div className="max-w-4xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-left">
              Wedding Orders
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <FaCheckCircle className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium">Customized Wedding Cakes</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <FaCheckCircle className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium">Dessert Table & Pastry Platters</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <FaCheckCircle className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium">Tasting & Consultation</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <FaCheckCircle className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium">Delivery & Setup Services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
