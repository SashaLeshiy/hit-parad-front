import React from 'react';

function PopupWithForm({
  isOpen,
  name,
  onClose,
  title,
  submit,
  nameForm,
  classNameForm,
  isConfirmDeletePopup,
  idForm,
  children,
  onSubmit }) {

  return (
    (<div className={`popup ${isOpen ? "popup_opened" : ""}`} id={`#${name}`}>
      <div className={`popup__container ${isConfirmDeletePopup ? "confirmPopup" : ""}`} id={`#${name}`}>
        <button type="button" onClick={onClose} className="popup__close"></button>
        <h3 className="popup__heading">{title}</h3>
        <form name={nameForm} className={classNameForm} id={idForm} onSubmit={onSubmit} >
          {children}
          <button type="submit" value={submit} className="input__save" >{submit}</button>
        </form>
      </div>
    </div>)
  );
}
export default PopupWithForm;