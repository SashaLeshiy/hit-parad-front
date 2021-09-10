import React from 'react';
import PopupWithForm from './PopupWithForm';

function ConfirmDeletePopup({ isOpen, onClose, onCardDelete }) {

    function handleSubmit(event) {
        event.preventDefault();
        // onCardDelete({ id: id });
      }

    return (
        <PopupWithForm name='confirmDelete' title='Вы уверены?' submit='Да'
            onCardDelete={onCardDelete}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}>
            <button type="button" onClick={onClose} className="popup__close"></button>
        </PopupWithForm>
    )

}

export default ConfirmDeletePopup;