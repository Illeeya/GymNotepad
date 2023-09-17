import Input from "../../General/Input/Input";
import style from "./exerciseStyle.module.css";
import useExercise from "./useExercise";

type ExerciseProps = {
  exerciseId: number;
  workoutId: number;
};

const Exercise = (props: ExerciseProps) => {
  const { exerciseData, max, handleDataChange, switchCollapse, isCollapsed } =
    useExercise(props);

  return (
    <div className={style.mainContainer}>
      <input
        className={[style.collapserPart, style.collapserNameInput].join(" ")}
        value={exerciseData.name}
        onChange={handleDataChange}
        name="name"
        type="text"
        placeholder="Exercise name..."
      />
      <div className={`${style.collapsible} ${isCollapsed ? style.collapsed : ""}`}>
        <div className={style.fourGrid}>
          {Input(exerciseData.reps ?? undefined, handleDataChange, "reps", "number", "Reps")}
          {Input(
            exerciseData.series ?? undefined,
            handleDataChange,
            "series",
            "number",
            "Series"
          )}
          {Input(
            exerciseData.bar ?? undefined,
            handleDataChange,
            "barWeight",
            "number",
            "Bar weight",
            0.1
          )}
          {Input(
            exerciseData.weight ?? undefined,
            handleDataChange,
            "weight",
            "number",
            "Weight",
            0.1
          )}
        </div>
        <p>
          {(
            (Number(exerciseData.bar) ?? 0) * 1 +
            (Number(exerciseData.weight) ?? 0) * 1
          ).toFixed(2)}
          kg
        </p>
        {Input(max ?? undefined, () => {}, "max", "number", "Max", 0.1)}
      </div>
      <button
        onClick={switchCollapse}
        className={[style.collapserPart, style.collapserButton].join(" ")}
      >
        {isCollapsed ? "+" : "-"}
      </button>
    </div>
  );
};

export default Exercise;
