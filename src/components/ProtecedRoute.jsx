import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("userToken");

  if (!token) {
    // If user is not logged in, redirect to login
    return <Navigate to="/" replace />;
  }

  // If logged in, show the protected page
  return children;
};

export default ProtectedRoute;