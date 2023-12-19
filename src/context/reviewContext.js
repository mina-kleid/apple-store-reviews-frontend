import React, { createContext, useState } from 'react';
import {fetchReviews, updateReviews} from "../utils/apiClient";

export const ReviewContext = createContext({

});

export const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getReviews = async (appId, timeframe) => {
    setLoading(true);
    try {
      const response = await fetchReviews(appId, timeframe);
      const data = await response.json();
      setReviews(data.reviews);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const refreshReviews = async (appId) => {
    setLoading(true);
    try {
      await updateReviews(appId);
    } catch (error) {
      console.error('Error refreshing reviews:', error);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <ReviewContext.Provider value={{ reviews, loading, getReviews, refreshReviews, error }}>
      {children}
    </ReviewContext.Provider>
  );
};