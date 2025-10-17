import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignatureTreats() {
  const navigate = useNavigate();
  const signatureProducts = [
    {
      id: 1,
      name: "Ghee Cake",
      description: "Buttery, flaky perfection baked fresh daily",
      category: "Pastries",
      image: "/Images/home-first.jpg",
    },
    {
      id: 2,
      name: "Milk Cake",
      description: "Buttery, flaky perfection baked fresh daily",
      category: "Pastries",
      image: "/Images/home-first.jpg",
    },
    {
      id: 3,
      name: "Almond stick",
      description: "Buttery, flaky perfection baked fresh daily",
      category: "Pastries",
      image: "/Images/home-first.jpg",
    },
    {
      id: 4,
      name: "Pista stick",
      description: "Buttery, flaky perfection baked fresh daily",
      category: "Pastries",
      image: "/Images/home-first.jpg",
    },
    {
      id: 5,
      name: "Carrot Halwa",
      description: "Buttery, flaky perfection baked fresh daily",
      category: "Pastries",
      image: "/Images/home-first.jpg",
    },
    {
      id: 6,
      name: "Muffin Cakes",
      description: "Buttery, flaky perfection baked fresh daily",
      category: "Pastries",
      image: "/Images/home-first.jpg",
    },
  ];

  return (
    <section className="w-full relative z-10 px-[48px] py-16 bg-white">
      <div className="w-full px-4 ">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Signature Treats
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From classic favorites to innovative creations, every item is baked fresh daily with premium ingredients
          </p>
        </div>

        {/* Product Grid - 2 rows with 3 cards each */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {signatureProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl max-h-[561.34375px] shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative  sm:min-h-[405.328125px] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full  sm:min-h-[405.328125px] object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="bg-orange-100 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {product.category}
                  </span>
                  <Link
                    to={`/product/${product.id}`}
                    className="bg-primary hover:bg-orange-600 text-white px-4 py-2 rounded-md font-semibold transition-colors"
                  >
                    See More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu Button */}
        <div className="text-center">
          <button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors flex items-center space-x-2 mx-auto cursor-pointer"
          onClick={() => navigate('/menu')}>
            <span>View Full Menu</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
