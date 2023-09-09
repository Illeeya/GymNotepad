import Input from "../../General/Input/Input";
import style from "./exerciseStyle.module.css";
import useExercise from "./useExercise";

const Exercise = () => {
  const { exerciseData, handleDataChange, switchCollapse, isCollapsed } = useExercise();

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
            exerciseData.barWeight ?? undefined,
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
            (Number(exerciseData.barWeight) ?? 0) * 1 +
            (Number(exerciseData.weight) ?? 0) * 1
          ).toFixed(2)}
          kg
        </p>
        {Input(exerciseData.max ?? undefined, handleDataChange, "max", "number", "Max", 0.1)}
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
