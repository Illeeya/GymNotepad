import style from "./yearPickerStyle.module.css";
import { useSelector } from "react-redux";
import { State } from "../../../State/Reducers";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../State";

const YearPicker = () => {
  const dispatch = useDispatch();
  const { pickYear } = bindActionCreators(actionCreators, dispatch);
  const { pickedYear } = useSelector((state: State) => state.datapicker);
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
      className={`${style.datePicker} ${style.yearPicker}`}
      onChange={(e) => pickYear(Number(e.target.value))}
      value={year}
    >
      {years}
    </select>
  );
};

export default YearPicker;
