import React, { FC, useEffect, useState } from 'react';
import { NavbarContainer, NavBrand, NavLink, NavLinks, SearchBarWrapper2, StyledBagIcon, Button } from './Navbar.styled';
import logoImg from './../../assets/logo.svg';
import SearchBar from '../SearchBar/SearchBar';
import { useLocation, Link } from 'react-router-dom'; // Import useLocation hook and Link component

const Navbar: FC = () => {
  const location = useLocation(); // Get current location
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [isAdmin, setIsAdmin] = useState(false); // State to track admin status

  useEffect(() => {
    // Check localStorage to see if user is logged in
    const jwtToken = localStorage.getItem('jwt');
    setIsLoggedIn(!!jwtToken); // Update isLoggedIn based on presence of jwtToken

    // Check localStorage to see if user is admin
    const adminStatus = localStorage.getItem('isAdmin') === 'true';
    setIsAdmin(adminStatus); // Update isAdmin based on isAdmin flag
  }, []);

  // Function to handle login/logout click
  const handleLoginLogout = () => {
    if (isLoggedIn) {
      // Logout logic: remove jwt and isAdmin from localStorage
      localStorage.removeItem('jwt');
      localStorage.removeItem('isAdmin');
      setIsLoggedIn(false);
      setIsAdmin(false);
      // Redirect to home page or other appropriate page after logout
      window.location.href = '/';
    } else {
      // Redirect to login page if not logged in
      window.location.href = '/login';
    }
  };

  // Function to handle profile button click
  const handleProfileClick = () => {
    window.location.href = '/profile'; // Redirect to profile page
  };

  return (
    <div>
      <NavbarContainer>
        <NavBrand>
          <Link to="/"><img src={logoImg} alt="Logo" /></Link>
        </NavBrand>
        <SearchBarWrapper2>
          <SearchBar />
        </SearchBarWrapper2>
        <NavLinks>
          <NavLink href="#">
            <StyledBagIcon />
          </NavLink>
          {isLoggedIn && !isAdmin && ( // Render the profile button only if user is logged in and not admin
            <Button className="button-nav-profile" type="button" onClick={handleProfileClick}>
              Perfil
            </Button>
          )}
          {isLoggedIn ? (
            <Button className="button-nav-login" type="button" onClick={handleLoginLogout}>
              Sair
            </Button>
          ) : (
            location.pathname === '/login' ? (
              <Link to="/signup">
                <Button className="button-nav-login" type="button">
                  Cadastrar
                </Button>
              </Link>
            ) : (
              <Button className="button-nav-login" type="button" onClick={handleLoginLogout}>
                Entrar
              </Button>
            )
          )}
        </NavLinks>
      </NavbarContainer>
    </div>
  );
};

export default Navbar;
