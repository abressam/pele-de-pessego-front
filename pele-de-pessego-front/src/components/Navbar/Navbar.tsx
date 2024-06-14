import React, { FC } from 'react';
import { NavbarContainer, NavBrand, NavLink, NavLinks, SearchBarWrapper2, StyledBagIcon } from './Navbar.styled';
import logoImg from './../../assets/logo.svg';
import { Button } from './Navbar.styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const Navbar: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isAdmin = localStorage.getItem('isAdmin');
  const jwt = localStorage.getItem('jwt');

  const buttonText = location.pathname === '/login' ? (
    <FormattedMessage id="Button.signup"/>
  ) : (
    <FormattedMessage id="Button.signin"/>
  );  
  
  const redirectPath = location.pathname === '/login' ? '/signup' : '/login';

  const handleButtonClick = () => {
    navigate(redirectPath);
  };

  const handleProfileClick = () => {
    navigate('/customerprofile');
  };

  const handleLogoutClick = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('isAdmin');
    navigate('/login'); // Redirecionar para a página de login após logout
  };

  const renderProfileButton = () => {
    if (isAdmin === 'false') {
      return (
        <Button className="button-nav-profile" type="button" onClick={handleProfileClick}>
          <FormattedMessage id="Buttom.profile" />
        </Button>
      );
    }
    return null; // Se isAdmin for true ou null, não criar o botão
  };

  return (
    <div>
      <NavbarContainer>
        <NavBrand>
          <Link to="/"><img src={logoImg} alt="Logo" /></Link>
        </NavBrand>
        <NavLinks>
          <NavLink href="/cart">
            <StyledBagIcon />
          </NavLink>
          {renderProfileButton()}
          {jwt ? (
            <Button className="button-nav-logout" type="button" onClick={handleLogoutClick}>
                <FormattedMessage id="UserFormButton.exit" />
            </Button>
          ) : (
            <Button className="button-nav-login" type="button" onClick={handleButtonClick}>
              {buttonText}
            </Button>
          )}
        </NavLinks>
      </NavbarContainer>
    </div>
  );
};

export default Navbar;
