import { api } from "../../utils/api";
import * as actions from "./index";

export const addCard = ({ link }) => dispatch => {
    api.setCard(link)
        // type: actions.ADD_CARD,
        // link
        // return fetch(`${URL}/cards`, {
        //     method: 'POST',
        //     headers: {
        //         authorization: 'Bearer ' + token,
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         link: link
        //     }),
        // })
        .then((data) => {
            console.log(data);
            dispatch({ type: actions.ADD_CARD, data });
        })
        .catch((err) => {
            dispatch(console.log(err));
        })
}

// function handleAddPlace({ name, link }) {
//   api.setCard(name, link)
//     .then((res) => {
//       setCards([res, ...cards])
//       closeAllPopups();
//       setTextSubmit('Добавить');
//     })
//     .catch((err) => {
//       closeAllPopups();
//       setIsAuth(false);
//       setInfoTooltipOpen(true);
//       console.log(err);
//       setTextSubmit('Добавить');
//     });

export const getCards = () => {
    return dispatch => {
    api.getInitialCards()
        // return fetch(`${URL}/cards`, {
        //     headers: {
        //       // authorization: 'Bearer ' + token,
        //       'Content-Type': 'application/json',
        //     }
        //     })
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

