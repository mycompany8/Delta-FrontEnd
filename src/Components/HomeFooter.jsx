import React from "react";

export default function HomeFooter() {
  return (
    <footer className="bg-gray-900 text-white w-full">
      {/* Stay in the Loop Section */}
      <div className="bg-gray-900 py-12 w-full border-b border-gray-700">
        <div className="w-full px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-gray-300 mb-8">
            Get exclusive offers, new product updates, and baking tips delivered to your inbox
          </p>
          <div className="flex justify-center">
            <div className="flex max-w-md w-full gap-2">
              <input
                type="tel"
                placeholder="Your Phone Number"
                className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
