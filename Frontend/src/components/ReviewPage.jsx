import React, { useEffect, useState } from "react";
const URL = import.meta.env.VITE_API_URL;

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    rating: "",
    comment: ""
  });

  // Fetch reviews from backend
  const fetchReviews = async () => {
    setReviewsLoading(true);
    try {
      const response = await fetch(`${URL}/reviews/all`);
      const data = await response.json();
      if (data.success) {
        setReviews(data.data);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setReviewsLoading(false);
    }
  };

  // Load reviews on component mount
  useEffect(() => {
    fetchReviews();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setForm({ name: "", email: "", rating: "", comment: "" });
  };

  const scrollToReviews = () => {
    const reviewsSection = document.querySelector('.review-scroll-container');
    if (reviewsSection) {
      reviewsSection.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.rating || !form.comment) {
      setError("All fields are required");
      setTimeout(() => setError(""), 3000);
      return;
    }
    
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`${URL}/reviews/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          rating: Number(form.rating),
          comment: form.comment
        })
      });

      const data = await response.json();
      
      if (data.success) {
        // Refresh reviews from backend
        await fetchReviews();
        resetForm();
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
        scrollToReviews();
      } else {
        setError(data.message || 'Error submitting review');
        setTimeout(() => setError(""), 3000);
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      setError('Error submitting review. Please try again.');
      setTimeout(() => setError(""), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full p-4 md:p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Reviews Section */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
          {reviewsLoading ? (
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 fade-in">
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <span className="ml-3 text-gray-500">Loading reviews...</span>
              </div>
            </div>
          ) : reviews.length === 0 ? (
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 fade-in">
              <p className="text-gray-500 text-center">No reviews yet. Be the first to leave a review!</p>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="max-h-[600px] lg:max-h-[700px] overflow-y-auto p-4 space-y-4 scrollbar-thin review-scroll-container">
                {reviews.map((review, index) => (
                  <div key={review._id} className={`border-b border-gray-100 pb-4 p-2 review-card fade-in ${index === reviews.length - 1 ? 'border-b-0' : ''}`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sm md:text-base text-gray-900">{review.name}</span>
                      <span className="text-yellow-500 text-sm md:text-base font-medium">
                        {"★".repeat(review.rating)}{" "}
                        {"☆".repeat(5 - review.rating)}
                      </span>
                    </div>
                    <p className="text-gray-600 mt-2 text-sm md:text-base leading-relaxed">{review.comment}</p>
                    <div className="flex items-center justify-between mt-3">
                      <small className="text-gray-400 text-xs">{review.email}</small>
                      <small className="text-gray-400 text-xs">
                        {new Date(review.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </small>
                    </div>
                  </div>
                ))}
              </div>
              {reviews.length > 3 && (
                <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
                  <p className="text-xs text-gray-500 text-center">
                    Scroll to see more reviews ({reviews.length} total)
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Review Form Section */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-md h-fit sticky top-4 fade-in">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Leave a Review</h2>

            {/* Success Message */}
            {showSuccess && (
              <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md fade-in">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Review submitted successfully!</span>
                  </div>
                  <button
                    onClick={scrollToReviews}
                    className="text-xs bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700 transition-colors"
                  >
                    View Latest
                  </button>
                </div>
              </div>
            )}

            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md fade-in">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" />
                  </svg>
                  <span className="text-sm font-medium">{error}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 md:p-3 rounded text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange} 
                  className="w-full border border-gray-300 p-2 md:p-3 rounded text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                <select
                  name="rating"
                  value={form.rating}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 md:p-3 rounded text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                >
                  <option value="">Select Rating</option>
                  <option value="1">1 - Poor</option>
                  <option value="2">2 - Fair</option>
                  <option value="3">3 - Good</option>
                  <option value="4">4 - Very Good</option>
                  <option value="5">5 - Excellent</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Review</label>
                <textarea
                  name="comment"
                  placeholder="Write your review..."
                  value={form.comment}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 md:p-3 rounded h-24 md:h-32 text-sm md:text-base resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-blue-600 text-white px-4 py-2 md:py-3 rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-sm md:text-base font-medium transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
