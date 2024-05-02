import styled from 'styled-components';
import { BsBag } from 'react-icons/bs';


export const NavbarContainer = styled.nav`
  background-color: #B54E4A;
  padding-inline: 1rem;
  padding-block: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const SearchBarWrapper2 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 16rem;
  gap: 1rem;
`;

export const NavLink = styled.a`
  color: #F7E9DE;
  text-decoration: none;
  &:hover {
    color: #34513A;
  }
`;

export const NavBrand = styled.a`
  color: #fff;
  width: 16rem;
  display: flex;
  font-size: 1.5rem;
  text-decoration: none;
`;

export const StyledBagIcon = styled(BsBag)`
  color: #F7E9DE;
  font-size: 20px;
  font-weight: 800;

  &:hover {
    color: #34513A;
  }
`;

export const Button = styled.button`
  background-color: #F7E9DE;
  color: #34513A;
  border: none;
  font-size: 12px;
  font-weight: 700;
  font-family: 'DM Sans', sans-serif;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 4px;
  width: 80px;
  height: 32px;

  &:hover {
    background-color: #34513A;
    color: #F7E9DE;
  }
`;
