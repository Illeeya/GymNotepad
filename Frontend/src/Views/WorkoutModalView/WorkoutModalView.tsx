import Exercise from "../../Components/WorkoutModalView/Exercise/Exercise";
import MainInfo from "../../Components/WorkoutModalView/MainInfo/MainInfo";
import Navigation from "../../Components/WorkoutModalView/Navigation/Navigation";
import { useWorkoutModalContext } from "../../Context/WorkoutModalContext";
import style from "./workoutModalView.module.css";

export default function ModalView() {
  const { workoutId } = useWorkoutModalContext();

  return (
    <div className={style.mainContainer}>
      <Navigation></Navigation>
      <MainInfo></MainInfo>
      <Exercise></Exercise>
      <Exercise></Exercise>
      <Exercise></Exercise>
    </div>
  );
}
