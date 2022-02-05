import React from 'react';
import { useSelector } from "react-redux";

function Navbar({ loggedIn,
    email,
    signOut,
    loginPage,
    onAddPlace,
    linkTo,
    openMobileMenu,
    isOpenMobileMenu }) {

    const userEmail = JSON.parse(localStorage.getItem('userEmail'));
    
    // const user = useSelector((state) => state.userReducer.user);
   
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
                    <li className="header__mail">{userEmail}</li>
                    <li><button onClick={signOut} className="header__button header__button_isLogin">Выйти</button></li>
                </>
                :
                (<li><button onClick={linkTo} className="header__button">{loginPage ? 'Регистрация' : 'Войти'}</button></li>)
            }
        </ul>)
    );
}
export default Navbar;