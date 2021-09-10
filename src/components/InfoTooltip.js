import React from 'react';
import OkIcon from '../images/ok_icon.jpg';
import NotIcon from '../images/not_icon.jpg';

function InfoTooltip({ isOpen, onClose, name, isAuth }) {
  return (
    (<div className={`popup ${isOpen ? "popup_opened" : ""}`} id={`#${name}`}>
      <div className="popup__container infoTooltip" >
        <button type="button" onClick={onClose} className="popup__close"></button>
        {isAuth ?
          <>
            <img className="popup__tooltip" src={OkIcon} alt="Успешная регистрация" />
            <h3 className="popup__heading">Вы успешно зарегистрировались!</h3>
          </>
          :
          <>
            <img className="popup__tooltip" src={NotIcon} alt="Регистрация не удалась" />
            <h3 className="popup__heading">Что-то пошло не так! Попробуйте еще раз.</h3>
          </>
        }
      </div>
    </div>)
  );
}
export default InfoTooltip;