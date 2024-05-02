import React, { FC } from 'react';
import { NavbarContainer, NavBrand, NavLink, NavLinks, SearchBarWrapper2, StyledBagIcon } from './Navbar.styled';
import logoImg from './../../assets/logo.svg';
import SearchBar from '../SearchBar/SearchBar';
import { Button } from './Navbar.styled';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useLocation hook and Navigate component

const Navbar: FC = () => {
  const location = useLocation(); // Get current location
  const navigate = useNavigate(); // Get Navigate component for navigation

  // Determine button text and redirection path based on location
  const buttonText = location.pathname === '/login' ? 'Cadastrar' : 'Entrar';
  const redirectPath = location.pathname === '/login' ? '/signup' : '/login';

  // Function to handle button click and navigate to the appropriate page
  const handleButtonClick = () => {
    navigate(redirectPath); // Redirect to the appropriate page
  };

  return (
    <div>
      <NavbarContainer>
        <NavBrand href="/">
          <img src={logoImg} alt="Logo" />
        </NavBrand>
        <SearchBarWrapper2>
          <SearchBar />
        </SearchBarWrapper2>
        <NavLinks>
          <NavLink href="#">
            <StyledBagIcon />
          </NavLink>
          <Button className="button-nav-login" type="button" onClick={handleButtonClick}>
            {buttonText}
          </Button>
        </NavLinks>
      </NavbarContainer>
    </div>

  );
};

export default Navbar;
