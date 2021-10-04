import * as actions from "../actions/index";

const initialState = {};


const reducer = (state = initialState, action) => {
    console.log('reducer', state);
    switch(action.type) {
        case actions.USER_INFO:
            return {...state, user: action.user}
        case actions.GET_USER:
            return {...state, user: action.user}


        default:
            return state;
    }
}

export default reducer;