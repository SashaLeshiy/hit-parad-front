import React from "react";
import Card from "../components/Card";
import Preloader from "./Preloader";

function Main({
  onQuestionOver,
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
    });
  }
  return (
    <main className="content section">
      <section className="profile">
        {loggedIn ? (
          <button
            type="button"
            onClick={onAddPlace}
            className="profile__button-add"
          >
            &#10010; ДОБАВИТЬ
          </button>
        ) : (
          <>
            <button
              type="button"
              onClick={onAddPlace}
              className="profile__button-add_unactive"
              disabled
            >
              &#10010; ДОБАВИТЬ
            </button>
            <div onClick={onQuestionOver} className="profile__question">
              ?
            </div>
          </>
        )}
      </section>

      <section className="elements">
        {cards ? (
          cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              loggedIn={loggedIn}
              id={card._id}
              rating={card.rating}
              name={card.title}
              artist={card.artist}
              frameSong={card.frameSong}
              link={card.image}
              likes={card.likes}
              ownerId={card.owner}
              onCardClick={dataImage}
              openPic={openPopImage}
              onConfirmDelete={onConfirmDelete}
            />
          ))
        ) : (
          <Preloader />
        )}
      </section>
    </main>
  );
}

export default Main;
