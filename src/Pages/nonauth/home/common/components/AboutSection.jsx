import React from "react";
import { FaHeart } from "react-icons/fa";

export default function AboutSection() {
  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "50+", label: "Daily Varieties" },
    { number: "100%", label: "Fresh Daily" }
  ];

  return (
    <section className="w-full md:px-[48px] bg-gray-50">
      <div className="w-full px-4 sm:px-6 bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 py-10 sm:py-16 lg:py-20 gap-8 lg:gap-12">
          {/* Left Column - Text Content */}
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Baking Dreams Into Reality
            </h2>
            
            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base md:text-lg text-neutral-secondary font-light max-w-xl">
                Started in 2020 by a group of passionate bakers, Delta Bakery has become the go-to spot for Gen Z foodies who crave authentic flavors with Instagram-worthy presentation.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg text-neutral-secondary font-light">
                Known for its wide selection of freshly baked goods and pastries. There is also another location in Kuttichira, on Francis Road. The bakery offers various items, from biscuits and cookies to pastries and other baked goods.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 max-w-md place-items-start gap-2 sm:gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-text-primary">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative py-3">
            <img 
              src="/Images/home-first.jpg" 
              alt="Freshly baked goods" 
              className="w-full h-auto min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[655px] max-w-[616px] rounded-xl shadow-lg object-cover"
            />
            
            {/* Floating Action Buttons */}
            <div className="relative top-3 sm:top-7">
              <div className="absolute bottom-2 right-2 sm:right-3 flex flex-col space-y-1 sm:space-y-3 max-h-[80px] sm:max-h-[108px] justify-center px-2 sm:px-4 max-w-[120px] sm:max-w-[146.71875px] bg-primary p-1 sm:p-2 rounded-lg">
                <h1 className="text-sm sm:text-base">❤️</h1>
                <div className="text-white rounded-lg transition-colors text-xs sm:text-sm md:text-lg font-medium">
                  Made with 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
