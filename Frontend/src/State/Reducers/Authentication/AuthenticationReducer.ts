import { Action, ActionType } from "./AuthenticationActions";

type AuthenticationType = {
    loggedIn: boolean;
    username: string | null;
};

const initialState: AuthenticationType = {
    loggedIn: false,
    username: null,
};

const reducer = (state: AuthenticationType = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.LOGIN:
            return { ...state, loggedIn: true };
        case ActionType.LOGOUT:
            return { ...state, loggedIn: false };
        case ActionType.CHANGEUSER:
            return { ...state, username: action.payload };
        default:
            return state;
    }
};

export default reducer;
