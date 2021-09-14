import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ id,
  link,
  name,
  frameSong,
  likes,
  ownerId,
  onCardClick,
  openPic,
  onCardLike,
  onCardListen,
  onCardDelete,
  onConfirmDelete,
  loggedIn
}) {

  const userInfo = React.useContext(CurrentUserContext);

  const isOwn = ownerId === userInfo._id;
  const isLiked = likes.some(i => i === userInfo._id);

  const cardDeleteButtonClassName = (`element__trash ${isOwn ? 'element__trash_visible' : ''}`);
  const cardLikeButtonClassName = (`element__like ${isLiked ? 'element__like_black' : ''}`);

  function handleLikeClick() {
    onCardLike({
      id: id,
      likes: likes
    })
  }

  function handleListenClick() {
    onCardListen({
      id: id
    })
  }

  function handleClick() {
    openPic();
    onCardClick({
      link: link,
      name: name,
      id: id,
      frameSong: frameSong,
    });
  }

  function handleDeleteClick() {
    onCardDelete({
      id: id,
    });
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
              <button type="button" onClick={handleListenClick} className="element__listen"></button>
            </div>
            :
            <div className="element__buttons">
              <button type="button" className="element__like_unactive" disabled></button>
              <button type="button" className="element__listen_unactive" disabled></button>
            </div>
          }
          <p className="element__likeCount">{likes.length}</p>
        </div>
      </div>
    </article>)
  );

}

export default Card;