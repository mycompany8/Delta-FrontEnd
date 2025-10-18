import React from "react";

export default function HomeFooter() {
  return (
    <footer className="bg-gray-900 text-white w-full">
      {/* Stay in the Loop Section */}
      <div className="bg-gray-900 py-8 sm:py-10 md:py-12 w-full border-b border-gray-700">
        <div className="w-full px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">Stay in the Loop</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Get exclusive offers, new product updates, and baking tips delivered to your inbox
          </p>
          <div className="flex justify-center">
            <div className="flex flex-col sm:flex-row max-w-md w-full gap-3 sm:gap-2">
              <input
                type="tel"
                placeholder="Your Phone Number"
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-md bg-white placeholder:text-gray-500 text-black text-sm sm:text-base border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="bg-orange-500 hover:bg-orange-600 px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium text-sm sm:text-base transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
