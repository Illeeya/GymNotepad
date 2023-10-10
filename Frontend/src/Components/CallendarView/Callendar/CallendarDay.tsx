import style from "./callendarStyle.module.css";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../State";

export default function Day(
    dayNumer: number | string,
    filled: boolean = false,
    hasWorkout: boolean = false,
    workoutId: string = ""
) {
    const dispatch = useDispatch();
    const { toggleModal, changeId, pickDay } = bindActionCreators(actionCreators, dispatch);

    return (
        <div
            onClick={
                // hasWorkout
                //   ?
                () => {
                    if (filled) pickDay(Number(dayNumer));
                    toggleModal();
                    changeId(workoutId || "");
                }
                // : undefined
            }
            key={crypto.randomUUID()}
            className={`${style.callendarDay} ${filled ? style.filledDay : ""} ${
                hasWorkout ? style.workoutDay : ""
            }`}
        >
            {dayNumer}
        </div>
    );
}
