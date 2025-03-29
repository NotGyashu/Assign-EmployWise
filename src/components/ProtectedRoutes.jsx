// src/components/ProtectedRoute.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token) || localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      localStorage.removeItem('token');
      navigate('/login');
      toast.warning('Please login to access this page');
    }
  }, [token, navigate]);

  return token ? children : null;
};

export default ProtectedRoute;