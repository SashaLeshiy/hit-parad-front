import React, { useEffect } from 'react';
import Card from '../components/Card';
// import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ onEditAvatar,
  onEditProfile,
  onAddPlace,
  dataImage,
  openPopImage,
  cards,
  setCards,
  onCardLike,
  onCardListen,
  onCardDelete,
  onConfirmDelete,
  loggedIn
}) {

  // const userInfo = React.useContext(CurrentUserContext);
  return (
    (<main className="content section">
      <section className="profile">
        {/* <div className="profile__image" style={{ backgroundImage: `url(${userInfo.avatar})` }} >
          <div onClick={onEditAvatar} className="profile__imageEdit"></div>
        </div>
        <div className="profile__info">
          <h1 className="profile__heading">{userInfo.name}</h1>
          <button type="button" onClick={onEditProfile} className="profile__button-edit"></button>
          <p className="profile__subheading">{userInfo.about}</p>
        </div> */}
        {loggedIn ?
          <button type="button" onClick={onAddPlace} className="profile__button-add">&#10010; Добавить</button>
          :
          <button type="button" onClick={onAddPlace} className="profile__button-add_unactive" disabled>&#10010; Добавить</button>
        }
      </section>
      <section className="elements">
        {(cards.map(card => (
          <Card key={card._id}
            loggedIn={loggedIn}
            id={card._id}
            name={card.title}
            frameSong={card.frameSong}
            link={card.image}
            likes={card.likes}
            ownerId={card.owner}
            onCardClick={dataImage}
            openPic={openPopImage}
            onCardLike={onCardLike}
            onCardListen={onCardListen}
            onCardDelete={onCardDelete}
            onConfirmDelete={onConfirmDelete}
          />
        )))}
      </section>
    </main>)
  );
}

export default Main;