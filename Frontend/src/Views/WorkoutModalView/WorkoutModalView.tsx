import Exercise from "../../Components/WorkoutModalView/Exercise/Exercise";
import MainInfo from "../../Components/WorkoutModalView/MainInfo/MainInfo";
import Navigation from "../../Components/WorkoutModalView/Navigation/Navigation";
import { useWorkoutModalContext } from "../../Context/WorkoutModalContext";
import useWorkoutModalView from "./useWorkoutModalView";
import style from "./workoutModalView.module.css";

export default function ModalView() {
  const { workoutId } = useWorkoutModalContext();
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
