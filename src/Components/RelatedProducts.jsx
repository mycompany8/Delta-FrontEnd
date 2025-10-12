import React from "react";
import { Link } from "react-router-dom";

export default function RelatedProducts() {
  const relatedProducts = [
    {
      id: 1,
      name: "Chocolate Eclairs",
      description: "Rich chocolate cream in crispy choux pastry",
      image: "/Images/home-first.jpg",
      price: "₹5.25"
    },
    {
      id: 2,
      name: "Artisan Croissants",
      description: "Buttery, flaky perfection baked fresh daily",
      image: "/Images/home-first.jpg",
      price: "₹4.50"
    },
    {
      id: 3,
      name: "Danish Pastries",
      description: "Delicate pastries with seasonal fruit toppings",
      image: "/Images/home-first.jpg",
      price: "₹6.00"
    },
    {
      id: 4,
      name: "Apple Turnovers",
      description: "Flaky pastry filled with spiced apple filling",
      image: "/Images/home-first.jpg",
      price: "₹4.75"
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">You Might Also Like</h3>
        <p className="text-gray-600">Discover more delicious treats from our bakery</p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <div key={product.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group">
            {/* Product Image */}
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h4 className="font-semibold text-gray-800 mb-2 line-clamp-1">{product.name}</h4>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-orange-500">{product.price}</span>
                <Link
                  to={`/product/${product.id}`}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


