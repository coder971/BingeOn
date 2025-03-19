import React, { useState } from 'react';
import { toast } from 'react-toastify';
import api from '../utils/api';

const ReviewForm = ({ imdbId, onReviewAdded }) => {
  const [reviewBody, setReviewBody] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!reviewBody.trim()) {
      toast.error('Please enter a review');
      return;
    }
    
    try {
      setIsSubmitting(true);
      const response = await api.postReview(reviewBody, imdbId);
      toast.success('Review submitted successfully!');
      setReviewBody('');
      if (onReviewAdded) {
        onReviewAdded(response.data);
      }
    } catch (error) {
      toast.error('Failed to submit review. Please try again.');
      console.error('Error submitting review:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">Leave a Review</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <textarea
            value={reviewBody}
            onChange={(e) => setReviewBody(e.target.value)}
            className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Share your thoughts about this movie..."
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-2 bg-primary text-white font-semibold rounded-lg transition hover:bg-primary-dark disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Review'}
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;