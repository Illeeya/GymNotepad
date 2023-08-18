import useCallendarView from "./useCallendarView";

export default function CallendarView() {
  const { makeCallendar, YearPicker, MonthPicker } = useCallendarView();

  return (
    <div className="callendarViewMainContainer">
      <div className="datePickers">
        <YearPicker />
        <MonthPicker />
      </div>
      {makeCallendar()}
    </div>
  ); // classname='newModuleMainContainer'
}
