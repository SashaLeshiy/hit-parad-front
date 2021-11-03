import React from 'react';
import Card from '../components/Card';
import Preloader from './Preloader';

function Main({ 
  onAddPlace,
  dataImage,
  openPopImage,
  cards,
  onConfirmDelete,
  loggedIn,
}) {



  if (cards) {
    cards.sort((a, b) => {
      return b.rating - a.rating;
    })
  }
  return (
    (<main className="content section">
      <section className="profile">
        {loggedIn ?
          <button type="button" onClick={onAddPlace} className="profile__button-add">&#10010; Добавить</button>
          :
          <button type="button" onClick={onAddPlace} className="profile__button-add_unactive" disabled>&#10010; Добавить</button>
        }
      </section>
      <section className="elements">
        {cards ?
          (cards.map(card => (
            <Card key={card._id}
              loggedIn={loggedIn}
              id={card._id}
              rating={card.rating}
              name={card.title}
              frameSong={card.frameSong}
              link={card.image}
              likes={card.likes}
              ownerId={card.owner}
              onCardClick={dataImage}
              openPic={openPopImage}
              onConfirmDelete={onConfirmDelete}
            />
          )))
          : <Preloader />
        }
      </section>
    </main>
    )
  );
}

export default Main;