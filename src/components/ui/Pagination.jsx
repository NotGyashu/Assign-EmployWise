// src/components/ui/Pagination.jsx
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Pagination component
 * @param {Object} props - Component props
 * @param {number} props.currentPage - Current page number
 * @param {number} props.totalPages - Total number of pages
 * @param {Function} props.onPageChange - Page change handler
 */
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="mt-8 flex justify-center items-center space-x-6">
      <button
        className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
          currentPage === 1
            ? "bg-amber-100 text-amber-400 cursor-not-allowed"
            : "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:shadow-lg hover:shadow-amber-500/30"
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="text-xl font-semibold text-amber-900 bg-amber-100 px-6 py-3 rounded-full min-w-[120px] text-center border border-amber-200">
        {currentPage} / {totalPages}
      </span>
      <button
        className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
          currentPage >= totalPages
            ? "bg-amber-100 text-amber-400 cursor-not-allowed"
            : "bg-gradient-to-r from-amber-600 to-amber-700 text-white hover:shadow-lg hover:shadow-amber-600/30"
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        Next
      </button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;