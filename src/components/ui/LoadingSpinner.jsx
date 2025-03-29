// src/components/ui/LoadingSpinner.jsx
import React from 'react';

/**
 * Loading spinner component
 */
const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-amber-500"></div>
    </div>
  );
};

export default LoadingSpinner;