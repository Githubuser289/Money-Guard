import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Navigate } from 'react-router-dom';

const MediaRoutes = ({ children }) => {
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  if (!isTablet) {
    return children;
  }
  return <Navigate to="/" replace />;
};

export default MediaRoutes;
