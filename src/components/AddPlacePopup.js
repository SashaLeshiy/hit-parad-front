import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import PopupWithForm from './PopupWithForm';

import { addCard } from "../store/actions/cardActions"

function AddPlacePopup({ isOpen,
    onClose,
    onAddPlace,
    setTextSubmit,
    textSubmit,
    closeAllPopups
}) {

    const [cardLink, setCardLink] = useState('');
    const dispatch = useDispatch();

    function handleChangeCardLink(event) {
        setCardLink(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        setTextSubmit('Добавляем...');
        dispatch(addCard({
            link: cardLink,
        }))
        closeAllPopups();
        setCardLink('');
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
            <span className="input__text-error nameElement-error" ></span>
            <input type="url"
                name="linkElement"
                id="linkElement"
                value={cardLink}
                onChange={handleChangeCardLink}
                placeholder="Ссылка на трэк с Яндекс.Музыка"
                className="input__text input__text_text_link" required />
            <span className="input__text-error linkElement-error" > </span>
        </PopupWithForm>
    )
}

export default AddPlacePopup;