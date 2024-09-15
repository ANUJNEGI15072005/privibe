import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

function RequireAuth({ children }) {
  const { isAuthenticated, checkAuth } = useAuth();

  React.useEffect(() => {
    checkAuth(); // Check authentication status when the component mounts
  }, [checkAuth]);

  if (isAuthenticated === undefined) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

export default RequireAuth;
