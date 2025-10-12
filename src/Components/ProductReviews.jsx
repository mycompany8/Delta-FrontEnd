import React from "react";
import { FaStar } from "react-icons/fa";

export default function ProductReviews({ product }) {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      date: "2 days ago",
      comment: "These cinnamon rolls are absolutely divine! The perfect balance of cinnamon and sweetness. My family asks for them every weekend now."
    },
    {
      id: 2,
      name: "Mike Chen",
      rating: 5,
      date: "1 week ago",
      comment: "Best cinnamon rolls in the city! The texture is perfect - soft and fluffy with just the right amount of icing. Will definitely order again."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      rating: 5,
      date: "2 weeks ago",
      comment: "Delicious and fresh! The cinnamon flavor really comes through. Great for special occasions or just treating yourself."
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i < rating ? "text-orange-400" : "text-gray-300"}
        />
      );
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      {/* Reviews Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Customer Reviews</h3>
          <div className="flex items-center">
            <div className="flex items-center mr-4">
              {renderStars(Math.floor(product.rating))}
            </div>
            <span className="text-lg font-semibold text-gray-800">
              {product.rating} out of 5 ({product.reviewCount} reviews)
            </span>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-orange-600 font-semibold text-sm">
                    {review.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{review.name}</h4>
                  <div className="flex items-center">
                    <div className="flex items-center mr-2">
                      {renderStars(review.rating)}
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">{review.comment}</p>
          </div>
        ))}
      </div>

      {/* Load More Reviews Button */}
      <div className="text-center mt-8">
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors">
          Load More Reviews
        </button>
      </div>
    </div>
  );
}


