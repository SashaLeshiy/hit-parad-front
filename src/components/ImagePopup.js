import React from 'react';

function ImagePopup({ card, onClose, isOpen }) {
    return (
        (<div className={`popup popupImg  ${isOpen ? "popup_opened" : ""}`} id="bigImage">
            <div className="popup__imageContainer">
                {/* <img src={card.link}
                    alt={card.name} className="popup__image" /> */}
                <button type="button" onClick={onClose} className="popup__close"></button>
                <div className="popup__frame">
                <iframe frameBorder="0" className="popup__imageFrame" title="yandexframe"
                src={card.frameSong} ></iframe>
                <p className="popup__imageName">{card.name}</p>   
                </div> 
            </div>
        </div>)
    );
}

export default ImagePopup;