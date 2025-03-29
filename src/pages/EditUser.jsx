// src/pages/EditUserPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import UserForm from '../components/user/UserForm';
import UserAvatar from '../components/user/UserAvatar';
import FormCard from '../components/ui/FormCard';
import LoadingSpinner from '../components/ui/LoadingSpinner';

export default function EditUserPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ 
    first_name: '', 
    last_name: '', 
    email: '',
    avatar: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://reqres.in/api/users/${id}`);
        setUser({
          ...response.data.data,
          avatar: response.data.data.avatar || `https://i.pravatar.cc/150?u=${response.data.data.email}`
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
        toast.error('Failed to fetch user data.');
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://reqres.in/api/users/${id}`, user);
      toast.success('User updated successfully!');
      setTimeout(() => navigate('/users'), 1500);
    } catch (error) {
      toast.error('Failed to update user.');
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen w-full p-4 sm:p-6 md:p-8 bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="max-w-md mx-auto lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
        <FormCard title="Edit Profile">
          <UserAvatar 
            src={user.avatar} 
            alt={`${user.first_name} ${user.last_name}`} 
          />
          <UserForm
            user={user}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onCancel={() => navigate('/users')}
          />
        </FormCard>
      </div>
    </div>
  );
}