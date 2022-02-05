import React from 'react';
import { useSelector } from 'react-redux';

function InfoTooltip({ isOpen, onClose, name, srcIcon, infoHeading }) {
  const addCardError = useSelector(state => state.cardReducer.cardError);

  return (
    (<div className={`popup ${addCardError || isOpen ? "popup_opened" : ""}`} id={`#${name}`}>
      <div className="popup__container infoTooltip" >
        <button type="button" onClick={onClose} className="popup__close"></button>
        <img className="popup__tooltip" src={srcIcon} alt={infoHeading} />
        <h3 className="popup__heading">{infoHeading}</h3>
      </div>
    </div>)
  );
}
export default InfoTooltip;