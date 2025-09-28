import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 w-full">
      <div className="w-full px-4">
        <h1 className="text-4xl font-bold text-center mb-8">About Delta Bakery</h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to Delta Bakery, where we've been crafting moments of joy through artisanal baking since 2020. 
            Located in the heart of Kozhikode, we specialize in creating fresh bread, delightful sweets, and grand spreads 
            for life's biggest celebrations.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Our commitment to quality and tradition has made us a beloved part of the Kozhikode community. 
            From our signature sourdough bread to our decadent desserts, every item is made with love and attention to detail.
          </p>
        </div>
      </div>
    </div>
  );
}
