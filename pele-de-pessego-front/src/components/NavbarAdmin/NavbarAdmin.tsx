import React, { FC } from 'react';
import { Button, NavbarAdminWrapper } from './NavbarAdmin.styled';
import {NavBrand, NavLink, NavLinks, SearchBarWrapper2, StyledBagIcon } from './NavbarAdmin.styled';
import logoImg from './../../assets/logo.svg';
import SearchBar from '../SearchBar/SearchBar';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useLocation hook and Navigate component
import {Link} from 'react-router-dom';
import { NavbarContainer } from '../Navbar/Navbar.styled';
import { FormattedMessage } from 'react-intl';


interface NavbarAdminProps {}

const NavbarAdmin: FC<NavbarAdminProps> = () => (
 <NavbarAdminWrapper data-testid="NavbarAdmin">
    <div>
      <NavbarContainer>
        <NavBrand>
        <Link to="/"><img src={logoImg} alt="Logo" /></Link>
        </NavBrand>
        <Link to="/login">
        <Button className="button-nav-login" type="button">
          <FormattedMessage id="UserFormButton.exit" />
        </Button>
      </Link>
      </NavbarContainer>
    </div>
 </NavbarAdminWrapper>
);

export default NavbarAdmin;
