import React, { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }
    ) {
    const avaLink = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        onUpdateAvatar({
            avatar: avaLink.current.value,
        })
        avaLink.current.value = '';
    }

    return (
        <PopupWithForm name='avatar' title='Обновить аватар'
            submit='Сохранить'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            nameForm='addCard'
            classNameForm='input input_card'
            idForm='addAva'>
            <input type="url"
                name="linkElement"
                id="linkAva"
                ref={avaLink}
                placeholder="Ссылка на аватар"
                className="input__text input__text_text_link" required />
            <span className="input__text-error linkAva-error" > </span>
        </PopupWithForm>
     )
}

export default EditAvatarPopup;