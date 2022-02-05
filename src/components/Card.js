import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { cardLike, cardListen } from '../store/actions/cardActions';

function Card({ id,
  link,
  name,
  artist,
  frameSong,
  likes,
  ownerId,
  onCardClick,
  openPic,
  onConfirmDelete,
  loggedIn,
  rating, card,
}) {

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
  }

  function handleClick() {
    openPic();
    onCardClick({
      link: link,
      name: name,
      artist: artist,
      id: id,
      frameSong: frameSong,
    });
    if(loggedIn) {
    dispatch(cardListen({
      id: id,
    }))
  }
  }

  function handleDeleteClick() {
    localStorage.setItem('deleteCardId', id);
    onConfirmDelete({ id: id, });
  }


  return (
    
    (<article className="element" >
      <a href="##" target="_self">
        <img src={link} alt={name} className="element__image" onClick={handleClick}/>
      </a>
      <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteClick} ></button>
                {loggedIn ?
                    <div className="element__buttons">
                        <button type="button" onClick={handleLikeClick} className={cardLikeButtonClassName}></button>
                    </div>
                    :
                    <div className="element__buttons">
                        <button type="button" className="element__like_unactive" disabled></button>
                    </div>
                }
                <div className="element__likeCount">
                    <p className="element__rating">{rating}</p>
                </div>
        <div className="element__text">
          <h3 className="element__heading">{name}</h3>
          <h2 className="element__artist">{artist} </h2>
        </div>
    </article>
    )
    
  );

}

export default Card;