import React, { useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useDispatch, useSelector } from "react-redux";

import { cardLike, cardListen } from '../store/actions/cardActions';

function Card({ id,
  link,
  name,
  frameSong,
  likes,
  ownerId,
  onCardClick,
  openPic,
  openSong,
  onCardLike,
  onCardListen,
  onCardDelete,
  onConfirmDelete,
  loggedIn,
  rating,
  showLoader,
  setConfirmDeletePopup,
  isConfirmDeletePopup,
  closeAllPopups
}) {
  const [pausePlay, setPausePlay] = useState(false);

  const dispatch = useDispatch();

  const user = useSelector((state) => state.userReducer.user);
  const userId = JSON.parse(localStorage.getItem('userId'));
  const isOwn = ownerId === userId;
  const isLiked = likes.some(i => i === userId);
  
  const cardDeleteButtonClassName = (`element__trash ${isOwn ? 'element__trash_visible' : ''}`);
  const cardLikeButtonClassName = (`element__like ${isLiked ? 'element__like_black' : ''}`);

  function handleLikeClick() {
    dispatch(cardLike({
      id: id,
      likes: likes,
      currentUserId: userId,
    }))
    // onCardLike({
    //   id: id,
    //   likes: likes,
    //   currentUserId: userInfo._id,
    // })
  }

  // function handleListenClick() {
  //   openSong();
  //   onCardListen({
  //     link: link,
  //     name: name,
  //     id: id,
  //     frameSong: frameSong,
  //   })
  // }

  function pauseIsOver() {
    setPausePlay(false);
  }

  function handleClick() {
    if(pausePlay) {
      return;
    }
    showLoader();
    openPic();
    onCardClick({
      link: link,
      name: name,
      id: id,
      frameSong: frameSong,
    });
    if(loggedIn) {
    dispatch(cardListen({
      // link: link,
      // name: name,
      id: id,
      // frameSong: frameSong,
    }))
    setPausePlay(true);
    setTimeout(pauseIsOver, 3000000);
  }
  }

  function handleDeleteClick() {
    localStorage.setItem('deleteCardId', id);
    onConfirmDelete({ id: id, });
    // onCardDelete({
    //   id: id,
    // });
  }


  return (
    (<article className="element" >
      <a href="##" target="_self">
        <img src={link} alt={name} onClick={handleClick} className="element__image" />
      </a>
      <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteClick} ></button>
      <div className="element__text">
        <h2 className="element__heading">{name}</h2>
        <div className="element__likes">
          {loggedIn ?
            <div className="element__buttons">
              <button type="button" onClick={handleLikeClick} className={cardLikeButtonClassName}></button>
              {/* <button type="button" onClick={handleListenClick} className="element__listen"></button> */}
            </div>
            :
            <div className="element__buttons">
              <button type="button" className="element__like_unactive" disabled></button>
              {/* <button type="button" className="element__listen_unactive" disabled></button> */}
            </div>
          }
          <p className="element__likeCount">{rating}</p>
        </div>
      </div>
    </article>
    )
  );

}

export default Card;