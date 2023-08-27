import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux/Auth/selectors';
import { logout } from 'redux/Auth/operations';
import {
  StyledLink,
  Info,
} from '../SharedStyledComponent/sharedStyledComponent';
import { styled } from 'styled-components';
const StyledLinkLogout = styled(StyledLink)`
&.active {
    background-color: red;
    color: white;
  }
  &:hover:not(.active) {
    background-color: red;
  }
`

export const UserMenu = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  return (
    <>
      <Info>{name}</Info>
      <StyledLinkLogout onClick={() => dispatch(logout())}> Logout</StyledLinkLogout>
    </>
  );
};