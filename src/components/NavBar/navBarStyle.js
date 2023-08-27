import styled from 'styled-components';
export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  height: 20px;
  width: 100%;
  padding: 20px 20px;
  &:a {
    color: black;
    font-size: 700;
  }
`;

export const NavItem = styled.div`
  display: flex;
  gap: 100px;
  align-items: baseline;
  
`;