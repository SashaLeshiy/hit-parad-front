import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ id, 
  link, 
  name, 
  likes, 
  ownerId, 
  onCardClick, 
  openPic, 
  onCardLike, 
  onCardDelete, 
  onConfirmDelete }) {
  
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

  function handleClick() {
    openPic();
    onCardClick({
      link: link,
      name: name,
      id: id,
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
          <button type="button" onClick={handleLikeClick} className={cardLikeButtonClassName}></button>
          <p className="element__likeCount">{likes.length}</p>
        </div>
      </div>
    </article>)
  );

}

export default Card;