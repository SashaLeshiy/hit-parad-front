import { api } from "../../utils/api";
import * as actions from "./index";

export const userInfo = () => {
    return dispatch => {
        api.getUserInfo()
            .then((res) => {
                dispatch({ type: actions.USER_INFO, user: res })
            })
            .catch((err) => {
                dispatch(console.log(err));
              })
    }
}