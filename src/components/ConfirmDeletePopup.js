import React from 'react';
import PopupWithForm from './PopupWithForm';
import { useDispatch } from "react-redux";

import { deleteCard } from "../store/actions/cardActions";

function ConfirmDeletePopup({ isOpen, onClose, onCardDelete, isConfirmDeletePopup}) {

    const dispatch = useDispatch();
    const id = localStorage.getItem('deleteCardId');

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(deleteCard({ 
            id,
         }));
        onClose();
      }

    return (
        <PopupWithForm name='confirmDelete' title='Вы уверены?' submit='Да'
            isConfirmDeletePopup={isConfirmDeletePopup}
            onCardDelete={onCardDelete}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}>
            <button type="button" onClick={onClose} className="popup__close"></button>
        </PopupWithForm>
    )

}

export default ConfirmDeletePopup;