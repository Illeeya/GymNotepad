import style from "./callendarStyle.module.css";
import { State } from "../../../State/Reducers";
import { useSelector } from "react-redux";
import Day from "./CallendarDay";

type dayWithWorkout = {
    dayNumber: number;
    workoutId: string;
};

const Callendar = () => {
    const workouts = useSelector((state: State) => state.workouts.workouts);
    const { pickedMonth, pickedYear } = useSelector((state: State) => state.datapicker);
    const grid: JSX.Element[] = [];
    const firstDayOfMonth: Date = new Date(pickedYear, pickedMonth, 1);
    const firstWeekday: number = firstDayOfMonth.getDay() == 0 ? 7 : firstDayOfMonth.getDay();
    const daysInMonth: number = new Date(pickedYear, pickedMonth + 1, 0).getDate();
    const daysWithWorkout: dayWithWorkout[] = workouts
        .filter((ex) => new Date(ex.date).getMonth() === pickedMonth)
        .map((ex) => ({ dayNumber: new Date(ex.date).getDate(), workoutId: ex.id }));
    // daysWithWorkout.push(5, 7, 11, 16, 21, 25);
    console.log(workouts);
    //Weekday names as first row
    for (let i: number = 0; i < 7; i++) {
        grid.push(Day(weekDays[i], false));
    }

    //Rest of the days based on the chosen month
    let j = 1;
    for (let i: number = 1; i < 43; i++) {
        if (i >= daysInMonth + firstWeekday) break;
        if (i < firstWeekday || j > daysInMonth) {
            grid.push(Day(""));
        } else {
            grid.push(
                Day(
                    j,
                    true,
                    daysWithWorkout.some((x) => x.dayNumber == j),
                    daysWithWorkout.find((x) => x.dayNumber == j)?.workoutId || ""
                )
            );
            j++;
        }
    }
    return <div className={style.callendar}>{grid}</div>;
};

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default Callendar;
