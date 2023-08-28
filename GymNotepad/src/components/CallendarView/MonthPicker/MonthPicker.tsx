import { useDatepickerContext } from "../../../Context/DatepickerContext";
import "./monthPickerStyle.css";

const MonthPicker = () => {
  const { pickedMonth, pickMonth } = useDatepickerContext();
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

export default MonthPicker;
