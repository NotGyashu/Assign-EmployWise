import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import EditUser from "./pages/EditUser";
import UserListPage from "./pages/UsersListPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/ProtectedRoutes";


const App = () => {
  return (
    <Router>
      <ToastContainer position="top-right" autoClose={2000} />
      <Routes>
  <Route path="/" element={<LoginPage />} />
  <Route path="/login" element={<LoginPage />} />
  <Route path="/users" element={<ProtectedRoute><UserListPage /></ProtectedRoute>} />
  <Route path="/edit-user/:id" element={<ProtectedRoute><EditUser /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};

export default App;