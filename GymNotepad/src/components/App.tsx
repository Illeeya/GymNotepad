import { DatepickerContextProvider } from "../Context/DatepickerContext";
import { useWorkoutModalContext } from "../Context/WorkoutModalContext";
import { WorkoutsContextProvider } from "../Context/WorkoutsContext";
import CallendarView from "../Views/CallendarView/CallendarView";
import ListView from "../Views/ListView/ListView";
import ModalView from "../Views/ModalView/ModalView";
import "./appStyle.css";
import { useApp } from "./useApp";
function App() {
  const { showCallendar, switchView } = useApp();
  const { isOpen } = useWorkoutModalContext();
  return (
    <div className="mainContainer">
      <DatepickerContextProvider>
        <WorkoutsContextProvider>
          {isOpen ? (
            <ModalView />
          ) : (
            <>
              <button className="switchButton" onClick={() => switchView()}>
                {showCallendar ? "Workout List" : "Workout Callendar"}
              </button>
              {showCallendar ? <CallendarView></CallendarView> : <ListView></ListView>}
            </>
          )}
        </WorkoutsContextProvider>
      </DatepickerContextProvider>

      {/* <button className="newWorkoutButton nwbUp">Workout</button>
        <Workout></Workout>
        <button className="newWorkoutButton nwbDown">Workout</button> */}
    </div>
  );
}

export default App;
