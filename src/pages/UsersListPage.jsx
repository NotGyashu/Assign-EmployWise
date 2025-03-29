// src/pages/UserListPage.jsx
import React, { useEffect, useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchUsers, deleteUser } from '../common/slices/usersSlice';
import UserCard from '../components/user/UserCard';
import Pagination from '../components/ui/Pagination';
import SearchBar from '../components/ui/SearchBar';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import authApi from '../common/utils/apiAuth';

const cardColors = [
  "from-amber-100 to-amber-50",
  "from-amber-50 to-white",
  "from-white to-amber-50",
  "from-amber-50 to-amber-100",
  "from-amber-100 to-white",
  "from-white to-amber-100",
];

export default function UserListPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, totalPages, loading, error } = useSelector((state) => state.users);
  const token = useSelector((state) => state.auth.token);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }
    dispatch(fetchUsers(page));
  }, [page, token, dispatch, navigate]);

  useEffect(() => {
    if (error) {
      toast.error('Failed to fetch users.');
    }
  }, [error]);

  const handleDelete = async (id) => {
    try {
      await authApi.delete(`https://reqres.in/api/users/${id}`);
      dispatch(deleteUser(id));
      toast.success('User deleted successfully!');
    } catch (error) {
      toast.error('Failed to delete user.');
    }
  };

  const filteredUsers = users.filter(user => {
    const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
    const email = user.email.toLowerCase();
    const search = searchTerm.toLowerCase();
    return fullName.includes(search) || email.includes(search);
  });

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="min-h-screen w-full p-6 bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800 mb-4">
            User Directory
          </h2>
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search users by name or email..."
          />
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUsers.map((user, index) => (
              <UserCard
                key={user.id}
                user={user}
                bgGradient={cardColors[index % cardColors.length]}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}

        {!searchTerm && (
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
}