import { Action, ActionType } from "./DatepickerActions";

type DatepickerType = {
  pickedYear: number;
  pickedMonth: number;
};

const initialState = {
  pickedYear: new Date().getUTCFullYear(),
  pickedMonth: new Date().getUTCMonth(),
};

const reducer = (state: DatepickerType = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.PICKYEAR:
      return { ...state, pickedYear: action.payload };
    case ActionType.PICKMONTH:
      return { ...state, pickedMonth: action.payload };
    default:
      return state;
  }
};

export default reducer;
