import { api } from "../../utils/api";
import * as actions from "./index";

export const addCard = ({ link }) => {
    return dispatch => {
        api.setCard(link)
            .then((res) => {
                dispatch({ type: actions.ADD_CARD, res });
            })
            .catch((err) => {
                dispatch(console.log(err));
            })
    }
}

export const deleteCard = ({ id }) => {
    return dispatch => {
        api.deleteCard(id)
      .then(() => {
        dispatch(getCards((state) => state.filter((elem) => elem._id !== id)));
      })
      .catch((err) => {
        console.log(err);
      })
    }
}

// function handleCardDelete({ id }) {
//     api.deleteCard(id)
//       .then(() => {
//         dispatch(getCards((state) => state.filter((elem) => elem._id !== id)));
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//   }

export const getCards = () => {
    return dispatch => {
        api.getInitialCards()
            .then((res) => {
                localStorage.setItem('songs', JSON.stringify(res));
                dispatch({ type: actions.GET_CARDS, cards: res })
            })
            .catch((err) => {
                dispatch(console.log(err));
            })
    }
}

// function getSongs() {
  //   api.getInitialCards()
  //     .then((res) => {
  //       localStorage.setItem('songs', JSON.stringify(res));
  //       setCards(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }

