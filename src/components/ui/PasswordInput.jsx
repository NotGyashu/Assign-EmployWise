import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

/**
 * Password input with visibility toggle
 * @param {Object} props - Component props
 * @param {string} props.label - Input label
 * @param {Object} props.register - React Hook Form register function
 * @param {Object} props.error - Error object from React Hook Form
 */
const PasswordInput = ({ label, register, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      {label && <label className="block text-sm font-medium text-amber-900/80 mb-2">{label}</label>}
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          className={`w-full px-4 py-3 bg-amber-50 border ${error ? 'border-red-300' : 'border-amber-200'} rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-900 placeholder-amber-400`}
          placeholder="••••••••"
          {...register}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-3.5 text-amber-500 hover:text-amber-700 transition-colors"
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? (
            <EyeSlashIcon className="h-5 w-5" />
          ) : (
            <EyeIcon className="h-5 w-5" />
          )}
        </button>
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">
          {error.message}
        </p>
      )}
    </div>
  );
};

PasswordInput.propTypes = {
  label: PropTypes.string,
  register: PropTypes.object.isRequired,
  error: PropTypes.object,
};

export default PasswordInput;