import React from 'react';
import { useSelector } from 'react-redux';
import { stateIsLoggedIn } from '../redux/Auths/selectors';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Title } from 'components/SharedStyledComponent/sharedStyledComponent';

export const Home = () => {
  const isLoggedIn = useSelector(stateIsLoggedIn);
  return !isLoggedIn ? (
    <LoginForm />
  ) : (
    <Title>Welcome to the Mrk PhoneBook!</Title>
  );
};