import React from 'react';
// import { useSelector } from "react-redux";

function MobileMenu({ loggedIn, email, signOut, isOpenMobileMenu }) {

    const userEmail = JSON.parse(localStorage.getItem('userEmail'));

    return (
        loggedIn &&
        (<ul className={`mobileMenu ${isOpenMobileMenu ? "mobileMenu_active" : ""}`}>
            <>
                <li className="mobileMenu__mail">{userEmail}</li>
                <li><button onClick={signOut} className="mobileMenu__button">Выйти</button></li>
            </>
        </ul>)
    );

}

export default MobileMenu;