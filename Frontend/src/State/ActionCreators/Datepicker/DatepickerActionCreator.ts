import { Dispatch } from "redux";
import { Action, ActionType } from "../../Reducers/Datepicker/DatepickerActions";

export const pickYear = (pickedYear: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.PICKYEAR,
      payload: pickedYear,
    });
  };
};
export const pickMonth = (pickedMonth: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.PICKMONTH,
      payload: pickedMonth,
    });
  };
};
