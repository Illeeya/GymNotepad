import { useWorkoutModalContext } from "../../../Context/WorkoutModalContext";
import Button from "../../General/Button/Button";
import style from "./navigationStyle.module.css";

const Navigation = () => {
  const { openClose } = useWorkoutModalContext();

  return (
    <div className={style.navigationContainer}>
      {Button("Cancel", openClose)}
      {Button("Save", openClose)}
    </div>
  );
};

export default Navigation;
