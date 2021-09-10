import React from 'react';

function MobileMenu({ loggedIn, email, signOut, isOpenMobileMenu }) {
    return (
        loggedIn &&
        (<ul className={`mobileMenu ${isOpenMobileMenu ? "mobileMenu_active" : ""}`}>
            <>
                <li className="mobileMenu__mail">{email}</li>
                <li><button onClick={signOut} className="mobileMenu__button">Выйти</button></li>
            </>
        </ul>)
    );

}

export default MobileMenu;