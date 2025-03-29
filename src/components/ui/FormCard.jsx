import React from 'react';
import PropTypes from 'prop-types';

/**
 * Form card container with gradient border
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Card content
 * @param {string} props.title - Card title
 * @param {string} props.gradient - Gradient classes
 */
const FormCard = ({ children, title, gradient = 'from-amber-200 to-amber-100' }) => {
  return (
    <div className={`relative group bg-gradient-to-br ${gradient} rounded-2xl p-0.5 shadow-xl hover:shadow-2xl transition-all duration-500 border border-amber-300`}>
      <div className="relative bg-white rounded-2xl p-6 sm:p-8 flex flex-col">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mt-16 sm:mt-20 mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
};

FormCard.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  gradient: PropTypes.string,
};

export default FormCard;