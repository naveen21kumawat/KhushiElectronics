import React, { useEffect, useState } from "react";

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    rating: "",
    comment: ""
  });

  // Fetch reviews from backend
  const fetchReviews = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/reviews/all');
      const data = await response.json();
      if (data.success) {
        setReviews(data.data);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  // Load reviews on component mount
  useEffect(() => {
    fetchReviews();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.rating || !form.comment) return alert("All fields required");

    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/reviews/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          rating: Number(form.rating),
          comment: form.comment
        })
      });

      const data = await response.json();
      
      if (data.success) {
        // Refresh reviews from backend
        await fetchReviews();
        setForm({ name: "", rating: "", comment: "" });
        alert('Review submitted successfully!');
      } else {
        alert(data.message || 'Error submitting review');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Error submitting review. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full p-4 md:p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Reviews Section */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <h3 className="text-xl font-semibold mb-4">Reviews</h3>
          {reviews.length === 0 ? (
            <p className="text-gray-500">No reviews yet.</p>
          ) : (
            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review._id} className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm md:text-base">{review.name}</span>
                    <span className="text-yellow-500 text-sm md:text-base">
                      {"★".repeat(review.rating)}{" "}
                      {"☆".repeat(5 - review.rating)}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-2 text-sm md:text-base">{review.comment}</p>
                  <small className="text-gray-400 text-xs">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </small>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Review Form Section */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-md">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Leave a Review</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 md:p-3 rounded text-sm md:text-base"
              />

              <select
                name="rating"
                value={form.rating}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 md:p-3 rounded text-sm md:text-base"
              >
                <option value="">Select Rating</option>
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Good</option>
                <option value="4">4 - Very Good</option>
                <option value="5">5 - Excellent</option>
              </select>

              <textarea
                name="comment"
                placeholder="Write your review..."
                value={form.comment}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 md:p-3 rounded h-24 md:h-32 text-sm md:text-base resize-none"
              ></textarea>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-blue-600 text-white px-4 py-2 md:py-3 rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-sm md:text-base font-medium transition-colors"
              >
                {loading ? 'Submitting...' : 'Submit Review'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
