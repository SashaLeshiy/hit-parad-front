import React from 'react';

function Navbar({ loggedIn, 
    email, 
    signOut, 
    loginPage, 
    onAddPlace,
    linkTo, 
    openMobileMenu, 
    isOpenMobileMenu }) {

    return (
        (<ul className="header__menu">
            {loggedIn ?
                <>
                    <li onClick={openMobileMenu} className="mobileMenu__burger" >
                        {!isOpenMobileMenu ?
                            <span></span>
                            :
                            <button onClick={openMobileMenu} className="mobileMenu__close"></button>}
                    </li>
                    <li className="header__mail">{email}</li>
                    <li><button onClick={signOut} className="header__button header__button_isLogin">Выйти</button></li>
                </>
                :
                (<li><button onClick={linkTo} className="header__button">{loginPage ? 'Регистрация/Войти' : 'Войти'}</button></li>)
            }
        </ul>)
    );
}
export default Navbar;