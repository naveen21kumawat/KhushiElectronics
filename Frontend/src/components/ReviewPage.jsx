import React, { useState } from "react";

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({
    name: "",
    rating: "",
    comment: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.rating || !form.comment) return alert("All fields required");

    const newReview = {
      ...form,
      date: new Date().toLocaleDateString()
    };
    setReviews([newReview, ...reviews]);
    setForm({ name: "", rating: "", comment: "" });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Leave a Review</h2>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded-xl shadow-md">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />

        <select
          name="rating"
          value={form.rating}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        >
          <option value="">Select Rating</option>
          <option value="5">★★★★★ (5)</option>
          <option value="4">★★★★☆ (4)</option>
          <option value="3">★★★☆☆ (3)</option>
          <option value="2">★★☆☆☆ (2)</option>
          <option value="1">★☆☆☆☆ (1)</option>
        </select>

        <textarea
          name="comment"
          placeholder="Write your review..."
          value={form.comment}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded h-24"
        ></textarea>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Submit Review
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Reviews</h3>
        {reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet.</p>
        ) : (
          reviews.map((review, index) => (
            <div key={index} className="border-b border-gray-200 py-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">{review.name}</span>
                <span className="text-yellow-500">
                  {"★".repeat(review.rating)}{" "}
                  {"☆".repeat(5 - Number(review.rating))}
                </span>
              </div>
              <p className="text-gray-600 mt-2">{review.comment}</p>
              <small className="text-gray-400">{review.date}</small>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ReviewPage;
