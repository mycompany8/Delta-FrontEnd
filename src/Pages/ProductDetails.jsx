import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProductHeader from "../Components/ProductHeader";
import ProductImageCarousel from "../Components/ProductImageCarousel";
import ProductInfo from "../Components/ProductInfo";
import ProductTabs from "../Components/ProductTabs";
import ProductReviews from "../Components/ProductReviews";
import RelatedProducts from "../Components/RelatedProducts";

export default function ProductDetails() {
  const { productId } = useParams();
  const [activeTab, setActiveTab] = useState("description");

  // Mock product data - in real app, this would come from API
  const product = {
    id: productId,
    name: "Cinnamon Rolls",
    description: "Warm, gooey, and absolutely irresistible cinnamon rolls made with our signature dough, rolled with premium Ceylon cinnamon and brown sugar, then topped with our house-made cream cheese frosting.",
    rating: 4.9,
    reviewCount: 127,
    features: [
      "Baked fresh daily · Best served warm",
      "Made with organic flour and real butter",
      "Customer favorite since 2020"
    ],
    images: [
      "/Images/home-first.jpg",
      "/Images/home-first.jpg",
      "/Images/home-first.jpg"
    ],
    sizes: [
      { name: "Regular", description: "Single roll", price: "₹3.75", selected: true },
      { name: "Large", description: "Extra large", price: "₹5.25", selected: false }
    ],
    descriptionContent: "Our signature cinnamon rolls are a labor of love, crafted using a time-honored recipe that has been perfected over generations. Each roll begins with our enriched dough, made with organic flour, farm-fresh eggs, and European-style butter, creating the perfect tender and fluffy texture. The magic happens in the filling - we use premium Ceylon cinnamon blended with organic brown sugar and a hint of vanilla. The rolls are then baked to golden perfection and finished with our house-made cream cheese frosting that melts beautifully into every spiral.",
    ingredients: [
      "Organic unbleached flour",
      "European-style butter",
      "Farm-fresh eggs",
      "Organic brown sugar",
      "Ceylon cinnamon",
      "Pure vanilla extract",
      "Cream cheese frosting",
      "Sea salt"
    ],
    allergens: "Contains: Wheat, Eggs, Dairy. May contain traces of nuts and soy. Prepared in a facility that processes tree nuts.",
    storage: [
      "Store at room temperature for up to 2 days",
      "Refrigerate for up to 5 days in airtight container",
      "Reheat in oven at 350°F for 5-7 minutes for best taste"
    ],
    specifications: {
      regular: {
        diameter: "4 inches",
        height: "1.5 inches",
        weight: "3.2 oz",
        servings: "1 person"
      },
      large: {
        diameter: "5.5 inches",
        height: "2 inches",
        weight: "5.1 oz",
        servings: "1-2 people"
      }
    },
    additionalInfo: {
      shelfLife: "3 days at room temperature",
      packaging: "Individual food-safe boxes",
      bestServed: "Warm with coffee or milk"
    },
    servingSuggestions: {
      perfectPairing: "Enjoy with freshly brewed coffee or warm milk",
      dessertStyle: "Serve warm with vanilla ice cream"
    }
  };

  return (
    <div className="min-h-screen bg-white w-full">
      {/* Header */}
      <ProductHeader />

      {/* Main Content */}
      <div className="w-full px-4 md:px-[10%] py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Product Images and Info */}
          <div className="lg:col-span-2">
            <ProductImageCarousel images={product.images} />
            <ProductInfo product={product} />
          </div>

          {/* Right Column - Enquire Now and Business Hours */}
          <div className="lg:col-span-1">
            <div className="bg-orange-50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Enquire Now
              </h3>
              <p className="text-gray-600 mb-4">
                Interested in this product? Get in touch with us for availability and bulk orders.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Response within 2 hours
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (555) 123-BAKE
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  orders@deltabakery.com
                </div>
              </div>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md transition-colors">
                Send Enquiry
              </button>
            </div>

            {/* Business Hours */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Business Hours</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>7:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-12">
          <ProductTabs 
            product={product} 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
          />
        </div>

        {/* Reviews Section */}
        <div className="mt-12">
          <ProductReviews product={product} />
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <RelatedProducts />
        </div>
      </div>
    </div>
  );
}
