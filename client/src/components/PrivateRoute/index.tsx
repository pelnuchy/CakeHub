import React, { useEffect, ComponentType } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  element: ComponentType<any>;
  [key: string]: any;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element: Component, ...rest }) => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('authToken');

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
