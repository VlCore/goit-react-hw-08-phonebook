import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/authSlice';
import { UserMenuContainer } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(state => state.auth.user.email);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <UserMenuContainer>
      <p>{userEmail}</p>
      <button onClick={handleLogout}>Logout</button>
    </UserMenuContainer>
  );
};

export default UserMenu;