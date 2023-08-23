import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationContainer } from './Navigation.styled';
// import { Button } from 'components/Form/SimpleForm.styled';
import { clearToken } from 'api/api';

const Navigation = () => {
    const handleLogout = () => {
        clearToken();
      };
  return (
    <NavigationContainer>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/contacts">Contacts</Link>
      <button onClick={handleLogout}>Logout</button>
    </NavigationContainer>
  );
};

export default Navigation;