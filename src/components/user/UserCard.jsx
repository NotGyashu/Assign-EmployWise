import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

/**
 * User card component
 * @param {Object} props - Component props
 * @param {Object} props.user - User data
 * @param {string} props.bgGradient - Tailwind gradient classes
 * @param {Function} props.onDelete - Delete handler function
 */
const UserCard = ({ user, bgGradient, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className={`relative group ${bgGradient} rounded-2xl p-0.5 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-amber-200`}>
      <div className="relative bg-white rounded-2xl p-6 h-full flex flex-col items-center">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <img
            src={user.avatar}
            alt={user.first_name}
            className="w-20 h-20 rounded-full border-4 border-amber-100 shadow-lg group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-amber-900 group-hover:text-amber-700 transition-colors duration-300">
            {user.first_name} {user.last_name}
          </h3>
          <p className="text-amber-700/80 mt-2">{user.email}</p>
        </div>
        <div className="flex justify-center space-x-4 mt-6 w-full">
          <button
            className="px-5 py-2 bg-transparent border-2 border-amber-500 text-amber-600 rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300 font-medium group-hover:scale-105"
            onClick={() => navigate(`/edit-user/${user.id}`)}
          >
            Edit
          </button>
          <button
            className="px-5 py-2 bg-transparent border-2 border-amber-700 text-amber-700 rounded-full hover:bg-amber-700 hover:text-white transition-all duration-300 font-medium group-hover:scale-105"
            onClick={() => onDelete(user.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
  bgGradient: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default UserCard;