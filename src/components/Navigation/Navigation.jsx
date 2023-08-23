import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationContainer } from './Navigation.styled';

const Navigation = () => {
  return (
    <NavigationContainer>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/contacts">Contacts</Link>
    </NavigationContainer>
  );
};

export default Navigation;