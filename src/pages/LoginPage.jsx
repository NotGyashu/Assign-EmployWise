// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { loginUser } from '../common/utils/apiAuth';
import { setToken } from '../common/slices/authSlice';
import { LoginCard } from '../components/auth/LoginCard';
import LoginForm from '../components/auth/LoginForm'; // Make sure this matches the export

/**
 * Login page component
 * Handles user authentication and redirects to dashboard on success
 */
export default function LoginPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (credentials) => {
    setIsSubmitting(true);
    try {
      const { token } = await loginUser(credentials);
      dispatch(setToken(token));
      localStorage.setItem('token', token);
      toast.success('Login successful!');
      navigate('/users');
    } catch (error) {
      toast.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full p-4 sm:p-6 flex items-center justify-center bg-gradient-to-br from-amber-50 to-amber-100">
      <LoginCard>
        <LoginForm onSubmit={handleLogin} isSubmitting={isSubmitting} />
      </LoginCard>
    </div>
  );
}