import { DatepickerContextProvider } from "../Context/DatepickerContext";
import { useWorkoutModalContext } from "../Context/WorkoutModalContext";
import { WorkoutsContextProvider } from "../Context/WorkoutsContext";
import CallendarView from "../Views/CallendarView/CallendarView";
import ListView from "../Views/ListView/ListView";
import ModalView from "../Views/ModalView/ModalView";
import style from "./appStyle.module.css";
import { useApp } from "./useApp";
function App() {
  const { showCallendar, switchView } = useApp();
  const { isOpen } = useWorkoutModalContext();
  return (
    <div className={style.mainContainer}>
      <DatepickerContextProvider>
        <WorkoutsContextProvider>
          {isOpen ? (
            <ModalView />
          ) : (
            <>
              <button className={style.switchButton} onClick={() => switchView()}>
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
