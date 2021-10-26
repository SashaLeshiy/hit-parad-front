import { api } from "../../utils/api";
import * as auth from "../../utils/auth";
import * as actions from "./index";

export const userInfo = () => {
    return dispatch => {
        api.getUserInfo()
            .then((res) => {
                dispatch({ type: actions.USER_INFO, user: res })
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

export const getUser = (token) => {
    return dispatch => {
        auth.getContent(token)
            .then((res) => {
                localStorage.setItem('userEmail', JSON.stringify(res.email))
                localStorage.setItem('userId', JSON.stringify(res._id))
                dispatch({ type: actions.GET_USER, user: res })
            })
            .catch((err) => {
                console.log(err);
            })
    }
}


// auth.getContent(token)
//       .then((res) => {
//         console.log(res);
//         if (res) {
//           setEmail(res.email);
//           setLoggedIn(true);
//           history.push('/');
//         }
//       })