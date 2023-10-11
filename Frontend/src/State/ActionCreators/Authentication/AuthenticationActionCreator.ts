import { Dispatch } from "redux";
import { Action, ActionType } from "../../Reducers/Authentication/AuthenticationActions";

export const logIn = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.LOGIN,
        });
    };
};
export const logOut = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.LOGOUT,
        });
    };
};
export const changeUser = (username: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.CHANGEUSER,
            payload: username,
        });
    };
};
