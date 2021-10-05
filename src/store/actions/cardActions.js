import { api } from "../../utils/api";
import * as actions from "./index";


export const addCard = ({ link }) => {
    return dispatch => {
        api.setCard(link)
            .then((res) => {
                dispatch({ type: actions.ADD_CARD, res });
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

export const deleteCard = ({ id }) => {
    return dispatch => {
        api.deleteCard(id)
            .then(() => {
                dispatch({ type: actions.DELETE_CARD, id });
                dispatch(getCards());
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

export const getCards = () => {
    return dispatch => {
        api.getInitialCards()
            .then((res) => {
                localStorage.setItem('songs', JSON.stringify(res));
                dispatch({ type: actions.GET_CARDS, cards: res })
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

export const cardLike = ({ id, likes, currentUserId }) => {
    const isLiked = likes.some(i => i === currentUserId);
    let likeMethod = '';
    isLiked ? likeMethod = api.deleteLike(id) : likeMethod = api.putLike(id);
    return dispatch => {
        likeMethod
            .then((newCard) => {
                dispatch({ type: actions.LIKE_CARD, card: newCard })
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

export const cardListen = ({ id }) => {
    return dispatch => {
        api.putListen(id)
            .then((newCard) => {
                dispatch({ type: actions.LISTEN_CARD, card: newCard })
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

// function handleCardListen({ id }) {
//     api.putListen(id)
//       .then((newCard) => {
//         dispatch(getCards((state) => state.map((elem) => elem._id === id ? newCard : elem)));
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

// function handleCardLike({ id, likes }) {
//     const isLiked = likes.some(i => i === currentUser._id);
//     let likeMethod = '';
//     isLiked ? likeMethod = api.deleteLike(id) : likeMethod = api.putLike(id);
//     likeMethod
//       .then((newCard) => {
//         dispatch(getCards((state) => state.map((elem) => elem._id === id ? newCard : elem)));
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

