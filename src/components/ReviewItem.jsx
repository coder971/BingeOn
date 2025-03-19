import React from 'react';

const ReviewItem = ({ review }) => {
  // Format date if available
  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown date';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <div className="flex items-start">
        <div className="h-10 w-10 rounded-full bg-primary-dark text-white flex items-center justify-center font-bold">
          {review.user ? review.user.charAt(0).toUpperCase() : 'A'}
        </div>
        <div className="ml-4 flex-1">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-semibold text-gray-800">
              {review.user || 'Anonymous User'}
            </h4>
            <span className="text-sm text-gray-500">
              {review.createdAt ? formatDate(review.createdAt) : 'Recently'}
            </span>
          </div>
          <p className="text-gray-700">{review.body}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;