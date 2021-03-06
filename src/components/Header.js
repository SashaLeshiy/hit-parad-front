import React from 'react';
import logo from '../../src/images/logo_hitallica.png';
import Navbar from './Navbar.js';

function Header({ loggedIn,
      // email,
      signOut,
      loginPage,
      setLoginPage,
      linkTo,
      openMobileMenu,
      isOpenMobileMenu,
      headlessPage
}) {

      return (
            (<header className={`header section ${headlessPage ? "hidden" : ""}`}>
                  <a href="/" target="_self">
                        <img src={logo} className="header__logo" alt="логотип hit-parad" />
                  </a>
                  <Navbar
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