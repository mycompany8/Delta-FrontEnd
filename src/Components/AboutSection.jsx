import React from "react";
import { FaHeart } from "react-icons/fa";

export default function AboutSection() {
  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "50+", label: "Daily Varieties" },
    { number: "100%", label: "Fresh Daily" }
  ];

  return (
    <section className="w-full bg-gray-50">
      <div className="w-full px-4 md:px-[10%] bg-gray-50 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Baking Dreams Into Reality
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Started in 2020 by a group of passionate bakers, Delta Bakery has become the go-to spot for Gen Z foodies who crave authentic flavors with Instagram-worthy presentation.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Known for its wide selection of freshly baked goods and pastries. There is also another location in Kuttichira, on Francis Road. The bakery offers various items, from biscuits and cookies to pastries and other baked goods.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <img 
              src="/Images/home-first.jpg" 
              alt="Freshly baked goods" 
              className="w-full h-100 object-cover rounded-xl shadow-lg"
            />
            
            {/* Floating Action Buttons */}
            <div className="absolute bottom-1 right-1 flex flex-col space-y-3 bg-orange-500 p-2 rounded-lg">
              <span>❤️</span>
              <div className="text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium">
                Made with 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
