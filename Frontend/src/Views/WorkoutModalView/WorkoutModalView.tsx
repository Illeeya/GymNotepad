import { useSelector } from "react-redux";
import MainInfo from "../../Components/WorkoutModalView/MainInfo/MainInfo";
import Navigation from "../../Components/WorkoutModalView/Navigation/Navigation";
import useWorkoutModalView from "./useWorkoutModalView";
import style from "./workoutModalView.module.css";
import { State } from "../../State/Reducers";

export default function ModalView() {
  const { workoutId } = useSelector((state: State) => state.workoutModal);
  const { Exercises } = useWorkoutModalView();

  return (
    <div className={style.mainContainer}>
      <Navigation></Navigation>
      {workoutId == 0 ? (
        <div>WRONG ID</div>
      ) : (
        <>
          <MainInfo></MainInfo>
          {Exercises(workoutId)}
        </>
      )}
    </div>
  );
}
