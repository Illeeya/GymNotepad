import Button from "../../General/Button/Button";
import style from "./navigationStyle.module.css";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../State";
import { useSelector } from "react-redux";
import { State } from "../../../State/Reducers";
import { syncWorkout } from "../../../api/Workouts/WorkoutsApi";

const Navigation = () => {
  const currentWorkout = useSelector((state: State) => state.currentWorkout);

  const dispatch = useDispatch();

  const { toggleModal, clearCurrentWorkout, addWorkout } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div className={style.navigationContainer}>
      {Button("Cancel", () => {
        toggleModal();
        clearCurrentWorkout();
      })}
      {Button("Save", () => {
        toggleModal();
        if (currentWorkout) {
          console.log(currentWorkout);
          addWorkout(currentWorkout);
          syncWorkout("Ilee", currentWorkout);
        }
      })}
    </div>
  );
};

export default Navigation;
