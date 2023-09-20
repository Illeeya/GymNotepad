import { useSelector } from "react-redux";
import style from "./monthPickerStyle.module.css";
import { State } from "../../../State/Reducers";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../State";

const MonthPicker = () => {
  const dispatch = useDispatch();
  const { pickMonth } = bindActionCreators(actionCreators, dispatch);
  const { pickedMonth } = useSelector((state: State) => state.datapicker);
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
      className={`${style.datePicker} ${style.monthPicker}`}
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
