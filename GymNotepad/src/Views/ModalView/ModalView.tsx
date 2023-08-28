import { useWorkoutModalContext } from "../../Context/WorkoutModalContext";

export default function ModalView() {
  const { openClose, workoutId } = useWorkoutModalContext();

  return (
    <div className="">
      {workoutId}
      <button onClick={() => openClose()}>X</button>
    </div>
  ); // classname='newModuleMainContainer'
}
