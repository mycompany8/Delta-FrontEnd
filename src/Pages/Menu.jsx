import React, { useState } from "react";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = [
    // Row 1
    { id: 1, name: "Pain au Chocolat", price: "₹4.00", description: "Classic French pastry with rich dark chocolate wrapped in buttery dough", category: "Pastries", ingredients: "Puff Pastry, Dark Chocolate, Butter, Eggs, Sugar", image: "/Images/home-first.jpg" },
    { id: 2, name: "Sourdough Bread", price: "₹8.00", description: "Traditional recipe with a modern twist, fermented for 24 hours", category: "Breads", ingredients: "Sourdough Starter, Flour, Water, Salt", image: "/Images/home-first.jpg" },
    { id: 3, name: "Tiramisu Cake", price: "₹6.75", description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone", category: "Desserts", ingredients: "Ladyfingers, Mascarpone, Coffee, Cocoa Powder", image: "/Images/home-first.jpg" },
    
    // Row 2
    { id: 4, name: "Artisan Croissants", price: "₹4.50", description: "Buttery, flaky perfection baked fresh daily with premium French butter", category: "Pastries", ingredients: "Flour, Butter, Eggs, Sugar, Yeast", image: "/Images/home-first.jpg" },
    { id: 5, name: "Cheesecake Slices", price: "₹7.25", description: "Creamy New York style cheesecake with graham cracker crust", category: "Desserts", ingredients: "Cream Cheese, Graham Crackers, Sugar, Eggs", image: "/Images/home-first.jpg" },
    { id: 6, name: "Chocolate Eclairs", price: "₹5.25", description: "Rich chocolate cream in crispy choux pastry with glossy chocolate glaze", category: "Desserts", ingredients: "Choux Pastry, Heavy Cream, Dark Chocolate, Eggs", image: "/Images/home-first.jpg" },
    
    // Row 3
    { id: 7, name: "French Baguette", price: "₹3.50", description: "Crusty exterior with soft, airy interior, perfect for sandwiches", category: "Breads", ingredients: "Flour, Water, Salt, Yeast", image: "/Images/home-first.jpg" },
    { id: 8, name: "Cinnamon Rolls", price: "₹5.00", description: "Sweet, gooey cinnamon rolls with cream cheese frosting", category: "Pastries", ingredients: "Flour, Cinnamon, Sugar, Butter, Cream Cheese", image: "/Images/home-first.jpg" },
    { id: 9, name: "Red Velvet Cake", price: "₹8.50", description: "Moist red velvet cake with cream cheese frosting", category: "Cakes", ingredients: "Flour, Cocoa, Buttermilk, Red Food Color, Cream Cheese", image: "/Images/home-first.jpg" },
    
    // Row 4
    { id: 10, name: "Chocolate Chip Cookies", price: "₹2.50", description: "Soft and chewy cookies loaded with chocolate chips", category: "Biscuits", ingredients: "Flour, Chocolate Chips, Butter, Sugar, Eggs", image: "/Images/home-first.jpg" },
    { id: 11, name: "Banana Bread", price: "₹4.25", description: "Moist banana bread with walnuts, perfect for breakfast", category: "Breads", ingredients: "Bananas, Flour, Walnuts, Sugar, Eggs, Butter", image: "/Images/home-first.jpg" },
    { id: 12, name: "Strawberry Tart", price: "₹6.00", description: "Fresh strawberry tart with vanilla custard and buttery crust", category: "Desserts", ingredients: "Strawberries, Pastry Cream, Flour, Butter, Sugar", image: "/Images/home-first.jpg" }
  ];

  const categories = ["All", "Pastries", "Breads", "Chips", "Cakes", "Biscuits"];
  
  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white w-full">
      {/* Hero Section */}
      <div className="bg-yellow-50 py-16 w-full">
        <div className="w-full px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Our Complete Menu</h1>
          <p className="text-lg text-gray-600">
            Discover our full range of artisanal pastries, breads, and desserts, all baked fresh daily with premium ingredients.
          </p>
        </div>
      </div>

      {/* Filter and Search Section */}
      <div className="bg-white py-6 w-full px-4 md:px-[10%]">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8 w-full">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-md text-sm font-semibold transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-orange-500 text-white shadow-md"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search and Sort */}
            <div className="flex gap-4 items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="pl-12 pr-4 py-3 w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
                <svg className="absolute left-4 top-4 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium text-gray-700">
                Sort by Name
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
                <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 w-full flex flex-col h-[520px]" 
                >
                <div className="relative">
                    <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-58 object-cover"
                    />
                </div>
                <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900 flex-1 truncate">{product.name}</h3>
                    <span className="text-orange-500 font-bold text-xl ml-4">{product.price}</span>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">
                    {product.description}
                    </p>
                    <div className="flex justify-between items-center mb-4">
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {product.category}
                    </span>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mt-auto">
                    <span className="font-semibold">Ingredients:</span> {product.ingredients}
                    </p>
                </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
}
