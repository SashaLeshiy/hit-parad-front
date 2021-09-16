import React from 'react';
import OkIcon from '../images/ok_icon.jpg';
import NotIcon from '../images/not_icon.jpg';

function InfoTooltip({ isOpen, onClose, name, isAuth }) {
  let srcIcon = ''
  let heading = '';

  if(isAuth) {
    srcIcon = OkIcon;
    heading = 'Вы успешно зарегистрировались!';
  } else {
    srcIcon = NotIcon;
    heading = 'Что-то пошло не так! Попробуйте еще раз.';
  }

  return (
    (<div className={`popup ${isOpen ? "popup_opened" : ""}`} id={`#${name}`}>
        <div className="popup__container infoTooltip" >
          <button type="button" onClick={onClose} className="popup__close"></button>
          <img className="popup__tooltip" src={srcIcon} alt={heading} />
          <h3 className="popup__heading">{heading}</h3>
        </div>
    </div>)
  );
}
export default InfoTooltip;