import React, { FC, useEffect } from 'react';
import { Button, NavbarAdminWrapper } from './NavbarAdmin.styled';
import {NavBrand, NavLink, NavLinks, SearchBarWrapper2, StyledBagIcon } from './NavbarAdmin.styled';
import logoImg from './../../assets/logo.svg';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useLocation hook and Navigate component
import {Link} from 'react-router-dom';
import { NavbarContainer } from '../Navbar/Navbar.styled';
import { FormattedMessage } from 'react-intl';


interface NavbarAdminProps {}

const NavbarAdmin: FC<NavbarAdminProps> = () => {

  const location = useLocation(); // Get current location
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('isAdmin');
    navigate('/login'); // Navigate to login page
    window.location.reload(); // Force refresh
  }

  useEffect(() => {
    // This effect will run on every location change
    // Logic to handle any necessary updates
  }, [location]); // Dependency array with location ensures this runs on route change
 
  return(
  
    <NavbarAdminWrapper data-testid="NavbarAdmin">
       <div>
         <NavbarContainer>
           <NavBrand>
           <Link to="/"><img src={logoImg} alt="Logo" /></Link>
           </NavBrand>
           <Link to="/login">
           <Button className="button-nav-login" type="button" onClick={logout}>
             <FormattedMessage id="UserFormButton.exit" />
           </Button>
         </Link>
         </NavbarContainer>
       </div>
    </NavbarAdminWrapper>
   );
} 

export default NavbarAdmin;
