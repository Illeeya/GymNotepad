import { ChangeEvent, useState } from "react";
import style from "./exerciseStyle.module.css";

const Exercise = () => {
  type ExerciseData = {
    name: string;
    reps: number;
    series: number;
    barWeight: number;
    weight: number;
    max: number;
  };

  const [exerciseData, setExerciseData] = useState<ExerciseData>({
    name: "",
    reps: 0,
    series: 0,
    barWeight: 0.0,
    weight: 0.0,
    max: 0.0,
  });
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const handleDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    setExerciseData({ ...exerciseData, [e.target.name]: e.target.value });
  };

  const switchCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div className={style.mainContainer}>
      <input
        className={[style.collapserPart, style.collapserNameInput].join(" ")}
        value={exerciseData.name}
        onChange={handleDataChange}
        name="name"
        type="text"
      />
      <div className={`${style.collapsible} ${isCollapsed ? style.collapsed : ""}`}>
        <input
          value={exerciseData.reps}
          onChange={handleDataChange}
          name="reps"
          type="number"
        />
        <input
          value={exerciseData.series}
          onChange={handleDataChange}
          name="series"
          type="number"
        />
        <input
          value={exerciseData.barWeight}
          onChange={handleDataChange}
          name="barWeight"
          type="number"
          step={0.01}
        />
        <input
          value={exerciseData.weight}
          onChange={handleDataChange}
          name="weight"
          type="number"
          step={0.01}
        />
        <p className={style.grid32}>
          {(exerciseData.barWeight * 1 + exerciseData.weight * 1).toFixed(2)}kg
        </p>
        <input
          className={style.grid42}
          value={exerciseData.max}
          onChange={handleDataChange}
          name="max"
          type="number"
          step={0.01}
        />
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
