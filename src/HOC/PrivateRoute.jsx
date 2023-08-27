import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { stateIsLoggedIn } from '../redux/Auths/selectors';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = useSelector(stateIsLoggedIn);

  if (isLoggedIn) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};