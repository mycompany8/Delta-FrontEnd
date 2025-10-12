import React from "react";
import { FaInfoCircle, FaList, FaApple } from "react-icons/fa";

export default function ProductTabs({ product, activeTab, setActiveTab }) {
  const tabs = [
    { id: "description", label: "Description", icon: FaInfoCircle },
    { id: "specifications", label: "Specifications", icon: FaList },
    { id: "nutrition", label: "Nutrition", icon: FaApple }
  ];

  const renderDescription = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">About Our {product.name}</h3>
        <p className="text-gray-600 leading-relaxed">{product.descriptionContent}</p>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-800 mb-3">Ingredients</h4>
        <ul className="space-y-2">
          {product.ingredients.map((ingredient, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {ingredient}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-800 mb-3">Allergen Information</h4>
        <div className="flex items-start">
          <svg className="w-5 h-5 mr-2 text-red-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <p className="text-gray-600">{product.allergens}</p>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-800 mb-3">Storage Instructions</h4>
        <ul className="space-y-1">
          {product.storage.map((instruction, index) => (
            <li key={index} className="text-gray-600 flex items-start">
              <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              {instruction}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const renderSpecifications = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-6">Product Specifications</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Regular Size</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Diameter:</span>
                <span className="font-semibold">{product.specifications.regular.diameter}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Height:</span>
                <span className="font-semibold">{product.specifications.regular.height}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Weight:</span>
                <span className="font-semibold">{product.specifications.regular.weight}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Servings:</span>
                <span className="font-semibold">{product.specifications.regular.servings}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Large Size</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Diameter:</span>
                <span className="font-semibold">{product.specifications.large.diameter}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Height:</span>
                <span className="font-semibold">{product.specifications.large.height}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Weight:</span>
                <span className="font-semibold">{product.specifications.large.weight}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Servings:</span>
                <span className="font-semibold">{product.specifications.large.servings}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Additional Information</h4>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Shelf Life:</span>
            <span className="font-semibold">{product.additionalInfo.shelfLife}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Packaging:</span>
            <span className="font-semibold">{product.additionalInfo.packaging}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Best Served:</span>
            <span className="font-semibold">{product.additionalInfo.bestServed}</span>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Serving Suggestions</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start">
            <svg className="w-5 h-5 mr-3 text-orange-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
            </svg>
            <div>
              <h5 className="font-semibold text-gray-800">Perfect Pairing</h5>
              <p className="text-gray-600">{product.servingSuggestions.perfectPairing}</p>
            </div>
          </div>
          <div className="flex items-start">
            <svg className="w-5 h-5 mr-3 text-orange-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <div>
              <h5 className="font-semibold text-gray-800">Dessert Style</h5>
              <p className="text-gray-600">{product.servingSuggestions.dessertStyle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNutrition = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-6">Nutritional Information</h3>
        <div className="bg-gray-50 rounded-lg p-6">
          <p className="text-gray-600 text-center">
            Nutritional information coming soon. Please contact us for specific dietary requirements.
          </p>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "description":
        return renderDescription();
      case "specifications":
        return renderSpecifications();
      case "nutrition":
        return renderNutrition();
      default:
        return renderDescription();
    }
  };

  return (
    <div className="bg-white">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="flex space-x-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === tab.id
                    ? "border-orange-500 text-orange-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {renderTabContent()}
      </div>
    </div>
  );
}


