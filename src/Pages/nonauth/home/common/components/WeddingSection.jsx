import React from "react";

export default function WeddingSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="w-full relative h-[80vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Images/festivalimage.png')"
        }}
      ></div>

      {/* White Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-16">
        <div className="max-w-2xl">
          {/* Wedding Special Badge */}
          <span className="flex items-center mb-6 ">
            <span className="text-red-500 text-2xl mr-2">♥</span>
            <span className="text-red-500 font-semibold text-lg">Wedding Special</span>
          </span>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
            Celebrate Your
          </h1>
          <h2 className="text-5xl md:text-6xl font-bold text-red-500 leading-tight">
            Love Story
          </h2>
          <h3 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
            With Sweet Memories
          </h3>


          {/* Description */}
          <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-lg ">
            From elegant wedding cakes to personalized dessert tables and custom favors, we create unforgettable sweet moments for your special day with love
          </p>

          {/* Contact Us Button */}
          <button 
            onClick={scrollToContact}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer"
          >
            Contact Us
          </button>

          {/* Offerings - Simple text layout */}
          <div className="mt-12 flex flex-col md:flex-row gap-30">
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Wedding Cakes</h4>
              <p className="text-gray-600">From ₹499</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Dessert Tables</h4>
              <p className="text-gray-600">From ₹799</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
