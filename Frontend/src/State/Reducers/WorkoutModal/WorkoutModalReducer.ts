import { Action, ActionType } from "./WorkoutModalActions";

type WorkoutModalType = {
  isOpen: boolean;

  workoutId: string;
};

const initialState = {
  isOpen: false,
  workoutId: "",
};

const reducer = (state: WorkoutModalType = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.CHANGEID:
      return { isOpen: state.isOpen, workoutId: action.payload };

    case ActionType.TOGGLEMODAL:
      return { isOpen: !state.isOpen, workoutId: state.workoutId };

    default:
      return state;
  }
};

export default reducer;
