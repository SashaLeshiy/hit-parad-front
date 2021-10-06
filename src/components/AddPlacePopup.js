import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import PopupWithForm from './PopupWithForm';
// import Preloader from './Preloader';
// import { connect } from "react-redux";

import { addCard } from "../store/actions/cardActions"

function AddPlacePopup({ isOpen,
     onClose,
     onAddPlace,
     setTextSubmit,
     textSubmit,
     closeAllPopups
    }) {

    // const [cardName, setCardName] = useState('');
    const [cardLink, setCardLink] = useState('');
    const dispatch = useDispatch();
    // function handleChangeCardName(event) {
    //     setCardName(event.target.value)
    // }

    function handleChangeCardLink(event) {
        setCardLink(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        setTextSubmit('Добавляем...');
        dispatch(addCard({
            // name: cardName, onAddPlace
            link: cardLink,
        }))
        closeAllPopups();
        // setTextSubmit('Добавить');
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