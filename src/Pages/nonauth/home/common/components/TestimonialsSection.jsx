import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

 function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(1);

  const testimonials = [
    {
      id: 1,
      emoji: "😋",
      quote: "Best sourdough in the city! The crust is perfection and the inside is so soft and flavorful.",
      rating: 5,
      name: "Jake Martinez"
    },
    {
      id: 2,
      emoji: "😋",
      quote: "Amazing pastries! The croissants are buttery and flaky, just like in Paris.",
      rating: 5,
      name: "Sarah Johnson"
    },
    {
      id: 3,
      emoji: "😋",
      quote: "Fresh bread every morning. This bakery has become my daily stop for breakfast.",
      rating: 4,
      name: "Mike Chen"
    }
  ];

  const currentTestimonialData = testimonials[currentTestimonial];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-orange-500" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="w-full relative z-10 py-16 bg-yellow-50">
      <div className="w-full px-4 md:px-[10%]">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            {/* Emoji */}
            <div className="text-6xl mb-6">
              {currentTestimonialData.emoji}
            </div>
            
            {/* Quote */}
            <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
              "{currentTestimonialData.quote}"
            </blockquote>
            
            {/* Rating */}
            <div className="flex justify-center space-x-1 mb-4">
              {renderStars(currentTestimonialData.rating)}
            </div>
            
            {/* Customer Name */}
            <p className="text-gray-800 font-semibold">
              {currentTestimonialData.name}
            </p>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial
                    ? "bg-orange-500"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default TestimonialsSection