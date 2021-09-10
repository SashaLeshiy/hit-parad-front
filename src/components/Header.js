import React from 'react';
import logo from '../../src/images/logo.svg';
import Navbar from './Navbar.js';

function Header({ loggedIn, email, signOut, loginPage, setLoginPage, linkTo, openMobileMenu, isOpenMobileMenu }) {
      return (
            (<header className="header section">
                  <a href="/" target="_self">
                        <img src={logo} className="header__logo" alt="логотип Mesto Russia" />
                  </a>
                  <Navbar email={email}
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