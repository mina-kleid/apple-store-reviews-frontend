import React, { createContext, useState } from 'react';
import {fetchReviews} from "../utils/apiClient";

export const ReviewContext = createContext({
  
});

export const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getReviews = async (appId) => {
    setLoading(true);
    try {
      const response = await fetchReviews(appId);
      const data = await response.json();
      setReviews(data.reviews);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      setError("Something went wrong");
    }
    setLoading(false);
  };

  return (
    <ReviewContext.Provider value={{ reviews, loading, fetchReviews: getReviews, error }}>
      {children}
    </ReviewContext.Provider>
  );
};