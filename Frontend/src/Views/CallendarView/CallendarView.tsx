import Callendar from "../../Components/CallendarView/Callendar/Callendar";
import MonthPicker from "../../Components/CallendarView/MonthPicker/MonthPicker";
import YearPicker from "../../Components/CallendarView/YearPicker/YearPicker";
import style from "./callendarViewStyle.module.css";

export default function CallendarView() {
  return (
    <div className={style.callendarViewMainContainer}>
      <div className={style.datePickers}>
        <YearPicker />
        <MonthPicker />
      </div>
      <Callendar />
    </div>
  );
}
