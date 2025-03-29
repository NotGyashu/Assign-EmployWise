import React from 'react';
import PropTypes from 'prop-types';

/**
 * User avatar component with hover effect
 * @param {Object} props - Component props
 * @param {string} props.src - Avatar image source
 * @param {string} props.alt - Alt text
 * @param {string} props.className - Additional classes
 */
const UserAvatar = ({ src, alt, className = '' }) => {
  return (
    <div className={`absolute -top-10 sm:-top-12 left-1/2 transform -translate-x-1/2 ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-[3px] sm:border-4 border-amber-100 shadow-lg group-hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
};

UserAvatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default UserAvatar;