import React from 'react';

function ImagePopup({ card, onClose, isOpen }) {
    return (
        (<div className={`popup popupImg  ${isOpen ? "popup_opened" : ""}`} id="bigImage">
            <div className="popup__imageContainer">
                <img src={card.link}
                    alt={card.name} className="popup__image" />
                <button type="button" onClick={onClose} className="popup__close"></button>
                <p className="popup__imageName">{card.name}</p>
            </div>
        </div>)
    );
}

export default ImagePopup;