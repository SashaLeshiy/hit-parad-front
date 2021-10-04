import React from 'react';
import { useSelector } from "react-redux";
import logo from '../../src/images/logo_hitallica.png';
import Navbar from './Navbar.js';

function Header({ loggedIn, 
      email, 
      signOut, 
      loginPage, 
      setLoginPage, 
      linkTo, 
      openMobileMenu, 
      isOpenMobileMenu,
      headlessPage
 }) {
      
      const user = useSelector((state) => state.userReducer.user);

      return (
            (<header className={`header section ${headlessPage ? "hidden" : ""}`}>
                  <a href="/" target="_self">
                        <img src={logo} className="header__logo" alt="логотип hit-parad" />
                  </a>
                  <Navbar
                  //  email={user.email}
                        signOut={signOut}
                        loggedIn={loggedIn}
                        loginPage={loginPage}
                        setLoginPage={setLoginPage}
                        linkTo={linkTo}
                        openMobileMenu={openMobileMenu}
                        isOpenMobileMenu={isOpenMobileMenu}
                        />
            </header>)
      );
}
export default Header;