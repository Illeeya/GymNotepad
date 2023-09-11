import style from "./callendarStyle.module.css";
import { useDatepickerContext } from "../../../Context/DatepickerContext";
import { useWorkoutsContext } from "../../../Context/WorkoutsContext";
import { useWorkoutModalContext } from "../../../Context/WorkoutModalContext";

const Callendar = () => {
  const { workouts } = useWorkoutsContext();
  const { pickedYear, pickedMonth } = useDatepickerContext();
  const grid: JSX.Element[] = [];
  const firstDayOfMonth: Date = new Date(pickedYear, pickedMonth, 1);
  const firstWeekday: number = firstDayOfMonth.getDay() == 0 ? 7 : firstDayOfMonth.getDay();
  const daysInMonth: number = new Date(pickedYear, pickedMonth + 1, 0).getDate();
  const daysWithWorkout: number[] = workouts
    .filter((ex) => ex.date.getMonth() === pickedMonth)
    .map((ex) => ex.date.getDate());

  daysWithWorkout.push(5, 7, 11, 16, 21, 25);

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
      grid.push(Day(j, true, daysWithWorkout.includes(j)));
      j++;
    }
  }
  return <div className={style.callendar}>{grid}</div>;
};

const Day = (
  dayNumer: number | string,
  filled: boolean = false,
  hasWorkout: boolean = false
) => {
  const { openClose, changeWorkoutId } = useWorkoutModalContext();
  return (
    <div
      onClick={
        hasWorkout
          ? () => {
              openClose();
              changeWorkoutId(Number(dayNumer));
            }
          : undefined
      }
      key={crypto.randomUUID()}
      className={`${style.callendarDay} ${filled ? style.filledDay : ""} ${
        hasWorkout ? style.workoutDay : ""
      }`}
    >
      {dayNumer}
    </div>
  );
};

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default Callendar;
