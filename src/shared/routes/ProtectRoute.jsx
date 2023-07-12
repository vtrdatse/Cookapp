import { getCookie } from 'cookies-next';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { APP_SAVE_KEYS } from '../constants';

const ProtectedRoute = ({ children }) => {
  const key = getCookie(APP_SAVE_KEYS.KEYS)
  if (!key) {
      return <Navigate to='/login' replace />;
  }
    return children;
};
export default ProtectedRoute;

