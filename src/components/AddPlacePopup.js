import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';
// import Preloader from './Preloader';

function AddPlacePopup({ isOpen, onClose, onAddPlace, setTextSubmit, textSubmit }) {

    // const [cardName, setCardName] = useState('');
    const [cardLink, setCardLink] = useState('');
    
    // function handleChangeCardName(event) {
    //     setCardName(event.target.value)
    // }

    function handleChangeCardLink(event) {
        setCardLink(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        setTextSubmit('Добавляем...');
        onAddPlace({
            // name: cardName,
            link: cardLink,
        })
        setCardLink('');
        // setCardName('');
    }

    return (
        <PopupWithForm name='cards' title='Добавить песню'
            submit={textSubmit}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            nameForm='addCard'
            classNameForm='input input_card'
            idForm='addForm'>
            {/* <input type="text"
                name="nameElement"
                id="nameElement"
                value={cardName}
                onChange={handleChangeCardName}
                placeholder="Название"
                className="input__text input__text_text_element"
                minLength="2" maxLength="30" required /> */}
            <span className="input__text-error nameElement-error" ></span>
            <input type="url"
                name="linkElement"
                id="linkElement"
                value={cardLink}
                onChange={handleChangeCardLink}
                placeholder="Ссылка на Яндекс.Музыка"
                className="input__text input__text_text_link" required />
            <span className="input__text-error linkElement-error" > </span>
        </PopupWithForm>
    )
}

export default AddPlacePopup;