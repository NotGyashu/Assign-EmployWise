// src/components/auth/LoginCard.jsx
import React from 'react';

/**
 * Login card container component
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Card content
 */
export const LoginCard = ({ children }) => (
  <div className="relative group w-full max-w-md bg-gradient-to-br from-amber-200 via-amber-100 to-amber-50 rounded-2xl p-0.5 shadow-xl hover:shadow-2xl transition-all duration-500 border border-amber-300">
    <div className="relative bg-white rounded-2xl p-8 sm:p-10">
      <div className="text-center mb-10">
        <div className="mb-6 flex justify-center">
          <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-2xl font-bold text-white">🔒</span>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800 mb-2">
          Welcome Back
        </h2>
        <p className="text-amber-700/80">Please sign in to continue</p>
      </div>
      {children}
    </div>
  </div>
);
