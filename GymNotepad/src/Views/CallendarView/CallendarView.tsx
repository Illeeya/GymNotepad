import Callendar from "../../Components/CallendarView/Callendar/Callendar";
import MonthPicker from "../../Components/CallendarView/MonthPicker/MonthPicker";
import YearPicker from "../../Components/CallendarView/YearPicker/YearPicker";
import "./callendarViewStyle.css";

export default function CallendarView() {
  return (
    <div className="callendarViewMainContainer">
      <div className="datePickers">
        <YearPicker />
        <MonthPicker />
      </div>
      <Callendar />
    </div>
  ); // classname='newModuleMainContainer'
}
