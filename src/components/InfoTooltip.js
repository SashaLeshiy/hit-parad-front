import React from 'react';
import OkIcon from '../images/ok_icon.jpg';
import NotIcon from '../images/not_icon.jpg';
import { useSelector } from 'react-redux';

function InfoTooltip({ isOpen, onClose, name, isAuth, setIsAuth }) {
  const addCardError = useSelector(state => state.cardReducer.cardError);

  let srcIcon = '';
  let heading = '';

  if (addCardError) {
    setIsAuth(false);
  }


  if (isAuth) {
    srcIcon = OkIcon;
    heading = 'Вы успешно зарегистрировались!';
  } else {
    srcIcon = NotIcon;
    heading = 'Что-то пошло не так! Попробуйте еще раз.';
  }

  if (addCardError) {
    srcIcon = NotIcon;
    heading = 'Что-то пошло не так! Попробуйте еще раз.';
  }


  return (
    (<div className={`popup ${addCardError || isOpen ? "popup_opened" : ""}`} id={`#${name}`}>
      <div className="popup__container infoTooltip" >
        <button type="button" onClick={onClose} className="popup__close"></button>
        <img className="popup__tooltip" src={srcIcon} alt={heading} />
        <h3 className="popup__heading">{heading}</h3>
      </div>
    </div>)
  );
}
export default InfoTooltip;