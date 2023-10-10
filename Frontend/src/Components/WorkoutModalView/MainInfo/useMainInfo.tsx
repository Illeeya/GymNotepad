import { useSelector } from "react-redux";
import { State } from "../../../State/Reducers";
import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../State";
import { Workout } from "../../../Types/Workout";

export default function useMainInfo() {
    const dispatch = useDispatch();

    const { modifyCurrentWorkout } = bindActionCreators(actionCreators, dispatch);

    const currentWorkout: Workout = useSelector((state: State) => state.currentWorkout)!;

    const today = new Date();
    const workoutType = currentWorkout?.type || "";
    const workoutDate =
        currentWorkout?.date.split("T")[0] || today.toISOString().split("T")[0];

    console.log(workoutDate);

    function handleDataChange(e: ChangeEvent<HTMLInputElement>) {
        const workout: Workout = { ...currentWorkout, [e.target.name]: e.target.value };
        modifyCurrentWorkout(workout);
    }

    return { workoutType, workoutDate, handleDataChange };
}
