import React from "react";
import { useSelector } from "react-redux";
import NotIcon from "../images/not_icon.jpg";

function InfoTooltip({
  isOpen,
  onClose,
  name,
  srcIcon,
  infoHeading,
  setSrcIcon,
  setInfoHeading,
}) {
  const addCardError = useSelector((state) => state.cardReducer.cardError);

  return (
    <div
      className={`popup ${addCardError || isOpen ? "popup_opened" : ""}`}
      id={`#${name}`}
    >
      <div className="popup__container infoTooltip">
        <button
          type="button"
          onClick={onClose}
          className="popup__close"
        ></button>
        <img
          className="popup__tooltip"
          src={srcIcon ? srcIcon : NotIcon}
          alt={infoHeading}
        />
        <h3 className="popup__heading">
          {infoHeading
            ? infoHeading
            : "Что-то пошло не так! Попробуйте еще раз."}
        </h3>
      </div>
    </div>
  );
}
export default InfoTooltip;
