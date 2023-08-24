import { DatepickerContextProvider } from "../context/DatepickerContext";
import { WorkoutsContextProvider } from "../context/WorkoutsContext";
import "./appStyle.css";
import CallendarView from "./CallendarView/CallendarView";
import ListView from "./ListView/ListView";
import { useApp } from "./useApp";

function App() {
  const { showCallendar, switchView } = useApp();
  return (
    <div className="mainContainer">
      <DatepickerContextProvider>
        <WorkoutsContextProvider>
          <button className="switchButton" onClick={() => switchView()}>
            {showCallendar ? "Workout List" : "Workout Callendar"}
          </button>
          {showCallendar ? <CallendarView></CallendarView> : <ListView></ListView>}
        </WorkoutsContextProvider>
      </DatepickerContextProvider>

      {/* <button className="newWorkoutButton nwbUp">Workout</button>
        <Workout></Workout>
        <button className="newWorkoutButton nwbDown">Workout</button> */}
    </div>
  );
}

export default App;
