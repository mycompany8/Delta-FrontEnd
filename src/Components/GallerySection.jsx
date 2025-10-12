import React from "react";
import { FaInstagram } from "react-icons/fa";

export default function GallerySection() {
  const galleryImages = [
    {
      id: 1,
      image: "/Images/home-first.jpg",
      alt: "Bakery Products"
    },
    {
      id: 2,
      image: "/Images/home-first.jpg",
      alt: "Bakery Products"
    },
    {
      id: 3,
      image: "/Images/home-first.jpg",
      alt: "Bakery Products"
    },
    {
      id: 4,
      image: "/Images/home-first.jpg",
      alt: "Bakery Products"
    },
    {
      id: 5,
      image: "/Images/home-first.jpg",
      alt: "Bakery Products"
    },
    {
      id: 6,
      image: "/Images/home-first.jpg",
      alt: "Bakery Products"
    },
    {
      id: 7,
      image: "/Images/home-first.jpg",
      alt: "Bakery Products"
    },
    {
      id: 8,
      image: "/Images/home-first.jpg",
      alt: "Bakery Products"
    }
  ];

  return (
    <section className="w-full relative z-10 py-16 bg-white border-t border-gray-200">
      <div className="w-full px-4 md:px-[10%]">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Instagram Worthy Moments
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow us @deltabakery for daily dose of baking inspiration
          </p>
        </div>

        {/* Image Grid - 2 rows with 4 images each */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {galleryImages.map((item) => (
            <div 
              key={item.id} 
              className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <img 
                src={item.image} 
                alt={item.alt} 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Instagram overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <FaInstagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Follow Us on Instagram Button */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-3 mx-auto shadow-lg hover:shadow-xl">
            <FaInstagram className="w-6 h-6" />
            <span>Follow Us on Instagram</span>
          </button>
        </div>
      </div>
    </section>
  );
}
