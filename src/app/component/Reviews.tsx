"use client";
import { useState } from "react";

type Review = {
  user: string;
  comment: string;
  rating: number;
};

type FoodItem = {
  name: string;
  category: string;
  description?: string;
  price: number;
  slug: string;
  reviews?: Review[];
};

const ReviewSection = ({ food }: { food: FoodItem }) => {
  const [newReview, setNewReview] = useState<Review>({ user: "", comment: "", rating: 0 });
  const [reviews, setReviews] = useState<Review[]>(food.reviews || []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.user && newReview.comment && newReview.rating > 0) {
      setReviews([...reviews, newReview]);
      setNewReview({ user: "", comment: "", rating: 0 });
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mt-8">Customer Reviews</h2>
      {reviews.length > 0 ? (
        <div className="mt-4 w-1/3 border-t border-black">
          {reviews.map((review, index) => (
            <div key={index} className="border-b border-black py-4">
              <p className="font-semibold">{review.user}</p>
              <p className="text-gray-600 mt-2">{review.comment}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No reviews yet. Be the first to review!</p>
      )}

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Add Your Review</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
          <input
            type="text"
            placeholder="Your Name"
            value={newReview.user}
            onChange={(e) => setNewReview({ ...newReview, user: e.target.value })}
            className="border p-2 rounded"
          />
          <textarea
            placeholder="Your Comment"
            value={newReview.comment}
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
            className="border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Rating (1-5)"
            value={newReview.rating}
            onChange={(e) => setNewReview({ ...newReview, rating: +e.target.value })}
            className="border p-2 rounded"
            min="1"
            max="5"
          />
          <button
            type="submit"
            className="mt-3 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewSection;
