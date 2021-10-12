import * as actions from "../actions/index";

const initialState = { 
    cards: JSON.parse(localStorage.getItem('songs')),
    cardError: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_CARDS:
            return { ...state, cards: action.cards }

        case actions.ADD_CARD:
            return { ...state, cards: [action.res, ...state.cards] }

        case actions.ADD_CARD_FAILURE:
            return { ...state, cardError: action.cardError}

        case actions.DELETE_CARD:
            return { ...state, cards: state.cards.filter(card => card.id !== action.id) }

        case actions.LIKE_CARD:
            return {
                ...state, cards: state.cards.map(card =>
                    card._id === action.card._id ?
                        action.card : card
                )
            }

        case actions.LISTEN_CARD:
            return {
                ...state, cards: state.cards.map(card =>
                    card._id === action.card._id ?
                        action.card : card
                )
            }

        default:
            return state;
    }
}

export default reducer;