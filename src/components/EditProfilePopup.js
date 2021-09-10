import React, { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const userInfo = React.useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setName(userInfo.name);
    setDescription(userInfo.about);
  }, [userInfo, isOpen]);

  function handleChangeName(event) {
    setName(event.target.value)
  }

  function handleChangeDescription(event) {
    setDescription(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateUser({
      name: name,
      about: description,
    })
  }

  return (
    <PopupWithForm name='profile' title='Редактировать профиль'
      submit='Сохранить'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      nameForm='changeProfile'
      classNameForm='input input_profile'
      idForm='profileForm'>
      <input type="text"
        name="nameSubject"
        id="nameSubject"
        value={name || ''}
        onChange={handleChangeName}
        className="input__text input__text_text_name"
        minLength="2" maxLength="40" required />
      <span className="input__text-error nameSubject-error" ></span>
      <input type="text"
        name="careerSubject"
        id="careerSubject"
        value={description || ''}
        onChange={handleChangeDescription}
        className="input__text input__text_text_career"
        minLength="2" maxLength="200" required />
      <span className="input__text-error careerSubject-error" > </span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;