import { Dispatch } from "redux";
import { Action, ActionType } from "../../Reducers/WorkoutModal/WorkoutModalActions";

export const toggleModal = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.TOGGLEMODAL,
    });
  };
};

export const changeId = (newId: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CHANGEID,
      payload: newId,
    });
  };
};
