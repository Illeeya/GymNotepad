import Input from "../../General/Input/Input";
import style from "./exerciseStyle.module.css";
import useExercise from "./useExercise";

type ExerciseProps = {
    exerciseId: string;
    workoutId: string;
};

const Exercise = (props: ExerciseProps) => {
    const {
        exerciseData,
        max,
        handleDataChange,
        handleOnBlurUpdate,
        switchCollapse,
        isCollapsed,
    } = useExercise(props);

    return (
        <div className={style.mainContainer}>
            <input
                className={[style.collapserPart, style.collapserNameInput].join(" ")}
                value={exerciseData.name}
                onChange={handleDataChange}
                onBlur={handleOnBlurUpdate}
                name="name"
                type="text"
                placeholder="Exercise name..."
            />
            <div className={`${style.collapsible} ${isCollapsed ? style.collapsed : ""}`}>
                <div className={style.fourGrid}>
                    <p className={[style.toRight, style.label].join(" ")}>Reps</p>
                    {Input(
                        exerciseData.reps ?? undefined,
                        handleDataChange,
                        handleOnBlurUpdate,
                        "reps",
                        "number",
                        "Reps"
                    )}
                    {Input(
                        exerciseData.series ?? undefined,
                        handleDataChange,
                        handleOnBlurUpdate,
                        "series",
                        "number",
                        "Series"
                    )}
                    <p className={[style.toLeft, style.label].join(" ")}>Series</p>
                    <p className={[style.toRight, style.label].join(" ")}>Bar</p>
                    {Input(
                        exerciseData.bar ?? undefined,
                        handleDataChange,
                        handleOnBlurUpdate,
                        "bar",
                        "number",
                        "Bar weight",
                        0.1
                    )}

                    {Input(
                        exerciseData.weight ?? undefined,
                        handleDataChange,
                        handleOnBlurUpdate,
                        "weight",
                        "number",
                        "Weight",
                        0.1
                    )}
                    <p className={[style.toLeft, style.label].join(" ")}>Weight</p>
                </div>
                <p>
                    {(
                        (Number(exerciseData.bar) ?? 0) * 1 +
                        (Number(exerciseData.weight) ?? 0) * 1
                    ).toFixed(2)}
                    kg
                </p>
                <p className={style.label}>Max:</p>
                <p className={style.label}>{max}</p>
                {/* <div className={style.maxWrapper}>
                    {Input(
                        max ?? undefined,
                        () => {},
                        () => {},
                        "max",
                        "number",
                        "Max",
                        0.1
                    )}
                </div> */}
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
