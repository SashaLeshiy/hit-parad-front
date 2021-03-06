import React from 'react';

function ImagePopup({ card, onClose, isOpen, }) {
    return (
        <>
            (<div className={`popup popupImg  ${isOpen ? "popup_opened" : ""}`} id="bigImage">
                <div className="popup__imageContainer">
                    <p className="popup__imageLoading">Загружаем...</p>
                    <button type="button" onClick={onClose} className="popup__close"></button>
                    <div className="popup__frame">
                        <iframe frameBorder="0" className="popup__imageFrame" title="yandexframe"
                            src={card.frameSong} allow="autoplay"></iframe> 
                        <p className="popup__imageName">{card.name}</p>
                        <p className="popup__imageArtist">{card.artist}</p>
                    </div>
                </div>
            </div>)
        </>
    );
}

export default ImagePopup;