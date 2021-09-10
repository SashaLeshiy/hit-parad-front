import React from 'react';
import Card from '../components/Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ onEditAvatar,
  onEditProfile,
  onAddPlace,
  dataImage,
  openPopImage,
  cards,
  onCardLike,
  onCardDelete,
  onConfirmDelete
}) {
  const userInfo = React.useContext(CurrentUserContext);
  console.log(cards);
  return (
    (<main className="content section">
      <section className="profile">
        <div className="profile__image" style={{ backgroundImage: `url(${userInfo.avatar})` }} >
          <div onClick={onEditAvatar} className="profile__imageEdit"></div>
        </div>
        <div className="profile__info">
          <h1 className="profile__heading">{userInfo.name}</h1>
          <button type="button" onClick={onEditProfile} className="profile__button-edit"></button>
          <p className="profile__subheading">{userInfo.about}</p>
        </div>
        <button type="button" onClick={onAddPlace} className="profile__button-add"></button>
      </section>
      <section className="elements">
        {(cards.map(card => (
          <Card key={card._id}
            id={card._id}
            name={card.title}
            link={card.image}
            likes={card.likes}
            ownerId={card.owner}
            onCardClick={dataImage}
            openPic={openPopImage}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
            onConfirmDelete={onConfirmDelete}
          />
        )))}
      </section>
    </main>)
  );
}

export default Main;