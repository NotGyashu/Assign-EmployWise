// src/components/ui/FormInput.jsx
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Reusable form input component
 * @param {Object} props - Component props
 * @param {string} props.label - Input label
 * @param {Object} props.register - React Hook Form register function
 * @param {Object} props.error - Error object from React Hook Form
 * @param {string} props.type - Input type
 * @param {string} props.placeholder - Input placeholder
 * @param {string} props.className - Additional CSS classes
 */
const FormInput = ({ label, register, error, type = 'text', placeholder, className = '', ...rest }) => (
  <div className={className}>
    {label && <label className="block text-sm font-medium text-amber-900/80 mb-2">{label}</label>}
    <input
      type={type}
      className={`w-full px-4 py-3 bg-amber-50 border ${error ? 'border-red-300' : 'border-amber-200'} rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-900 placeholder-amber-400`}
      placeholder={placeholder}
      {...register}
      {...rest}
    />
    {error && (
      <p className="mt-1 text-sm text-red-600">
        {error.message}
      </p>
    )}
  </div>
);

FormInput.propTypes = {
  label: PropTypes.string,
  register: PropTypes.object.isRequired,
  error: PropTypes.object,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default FormInput;