import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormInput from '../ui/FormInput';
import PasswordInput from '../ui/PasswordInput';
import { Button } from '../ui/Button'; // Changed to named import

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

/**
 * Login form component
 * @param {Object} props - Component props
 * @param {Function} props.onSubmit - Form submission handler
 * @param {boolean} props.isSubmitting - Loading state
 */
const LoginForm = ({ onSubmit, isSubmitting }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <FormInput
        label="Email"
        register={register('email')}
        error={errors.email}
        type="email"
        placeholder="Enter your email"
      />
      
      <PasswordInput
        label="Password"
        register={register('password')}
        error={errors.password}
      />

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 px-6"
      >
        {isSubmitting ? 'Signing In...' : 'Sign In'}
      </Button>

      <div className="text-center mt-6">
        <a
          href="#"
          className="text-sm font-medium text-amber-600 hover:text-amber-800 hover:scale-105 transition-transform duration-300"
        >
          Forgot Password?
        </a>
      </div>
    </form>
  );
};

export default LoginForm;