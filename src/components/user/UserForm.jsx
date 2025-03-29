// src/components/user/UserForm.jsx
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Reusable user form component
 * @param {Object} props - Component props
 * @param {Object} props.user - User data
 * @param {Function} props.onChange - Change handler
 * @param {Function} props.onSubmit - Submit handler
 * @param {Function} props.onCancel - Cancel handler
 * @param {string} props.avatar - User avatar URL
 * @param {string} props.title - Form title
 */
const UserForm = ({ user, onChange, onSubmit, onCancel, avatar, title }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4 sm:space-y-6">
      <div>
        <label className="block text-sm sm:text-base font-medium text-amber-900/80 mb-1 sm:mb-2">First Name</label>
        <input
          type="text"
          name="first_name"
          value={user.first_name}
          onChange={onChange}
          className="w-full px-4 py-2 sm:px-4 sm:py-3 bg-amber-50 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-900 placeholder-amber-400"
          placeholder="First name"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm sm:text-base font-medium text-amber-900/80 mb-1 sm:mb-2">Last Name</label>
        <input
          type="text"
          name="last_name"
          value={user.last_name}
          onChange={onChange}
          className="w-full px-4 py-2 sm:px-4 sm:py-3 bg-amber-50 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-900 placeholder-amber-400"
          placeholder="Last name"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm sm:text-base font-medium text-amber-900/80 mb-1 sm:mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={onChange}
          className="w-full px-4 py-2 sm:px-4 sm:py-3 bg-amber-50 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-900 placeholder-amber-400"
          placeholder="Email address"
          required
        />
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
        <button
          type="submit"
          className="flex-1 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300"
        >
          Update Profile
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-amber-200 to-amber-300 text-amber-800 rounded-full font-medium hover:shadow-lg hover:shadow-amber-400/20 transition-all duration-300"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

UserForm.propTypes = {
  user: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  avatar: PropTypes.string,
  title: PropTypes.string,
};

export default UserForm;