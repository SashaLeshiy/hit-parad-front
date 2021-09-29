import * as actions from "../actions/index";

const initialState = {};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.USER_INFO:
            return {...state, user: action.user}


        default:
            return state;
    }
}

export default reducer;