// src/components/ui/Button.jsx
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Enhanced Button component with smooth hover effects
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Button content
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.disabled - Disabled state
 * @param {string} props.variant - Button variant (primary, secondary)
 * @param {string} props.size - Button size (sm, md, lg)
 */
const Button = ({ 
  children, 
  className = '', 
  disabled = false, 
  variant = 'primary',
  size = 'md',
  ...props 
}) => {
  // Base button classes
  const baseClasses = 'rounded-full font-medium transition-all duration-300 relative overflow-hidden group';
  
  // Size classes
  const sizeClasses = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg'
  };
  
  // Variant classes
  const variantClasses = {
    primary: `bg-gradient-to-r from-amber-500 to-amber-600 text-white 
              hover:shadow-lg hover:shadow-amber-500/30
              active:scale-95 active:shadow-none
              disabled:opacity-50 disabled:cursor-not-allowed`,
    secondary: `bg-gradient-to-r from-amber-200 to-amber-300 text-amber-800 
                hover:shadow-lg hover:shadow-amber-400/20
                active:scale-95 active:shadow-none
                disabled:opacity-50 disabled:cursor-not-allowed`
  };

  // Hover effect classes
  const hoverEffectClasses = `absolute inset-0 bg-gradient-to-r ${
    variant === 'primary' ? 'from-amber-600 to-amber-500' : 'from-amber-300 to-amber-200'
  } opacity-0 group-hover:opacity-100 transition-opacity duration-300`;

  return (
    <button
      className={`
        ${baseClasses} 
        ${variantClasses[variant]} 
        ${sizeClasses[size]}
        ${className}
        cursor-pointer
      `}
      disabled={disabled}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      <span className={hoverEffectClasses}></span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export { Button };