import * as actions from "../actions/index";

const initialState = {cards: JSON.parse(localStorage.getItem('songs'))};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.GET_CARDS:
            return {...state, cards: action.cards}

        case actions.ADD_CARD:
            return {...state, cards: [action.res, ...state.cards]}

        default:
            return state;
    }
}

export default reducer;