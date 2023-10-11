export enum ActionType {
    LOGIN = "logIn",
    LOGOUT = "logOut",
    CHANGEUSER = "changeUser",
}

interface LogIn {
    type: ActionType.LOGIN;
}

interface LogOut {
    type: ActionType.LOGOUT;
}

interface ChangeUser {
    type: ActionType.CHANGEUSER;
    payload: string;
}

export type Action = LogIn | LogOut | ChangeUser;
