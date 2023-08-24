import "./callendarViewStyle.css";
import { useDatepickerContext } from "../../context/DatepickerContext";
import { useWorkoutsContext } from "../../context/WorkoutsContext";
export default function useCallendarView() {
  const { pickedYear, pickYear, pickedMonth, pickMonth } = useDatepickerContext();
  const { workouts } = useWorkoutsContext();

  function makeCallendar() {
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
    return <div className="callendar">{grid}</div>;
  }

  const YearPicker = () => {
    const year: number = pickedYear;
    const years: JSX.Element[] = [];

    for (
      let i: number = new Date().getUTCFullYear();
      i > new Date().getUTCFullYear() - 20;
      i--
    ) {
      years.push(
        <option key={crypto.randomUUID()} value={i}>
          {i}
        </option>
      );
    }

    return (
      <select
        name="yearPicker"
        id="yearPicker"
        className=" datePicker yearPicker"
        onChange={(e) => pickYear(Number(e.target.value))}
        value={year}
      >
        {years}
      </select>
    );
  };

  const MonthPicker = () => {
    const month: number = pickedMonth;
    const months: JSX.Element[] = [];

    for (let i: number = 0; i <= 11; i++) {
      months.push(
        <option key={crypto.randomUUID()} value={i}>
          {monthsDictionary[i]}
        </option>
      );
    }

    return (
      <select
        name="monthPicker"
        id="monthPicker"
        className="datePicker monthPicker"
        onChange={(e) => pickMonth(Number(e.target.value))}
        value={month}
      >
        {months}
      </select>
    );
  };

  return { makeCallendar, YearPicker, MonthPicker };
}

const Day = (
  dayNumer: number | string,
  filled: boolean = false,
  hasWorkout: boolean = false
) => {
  return (
    <div
      key={crypto.randomUUID()}
      className={`callendarDay ${filled ? "filledDay" : ""} ${hasWorkout ? "workoutDay" : ""}`}
    >
      {dayNumer}
    </div>
  );
};

const monthsDictionary = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
