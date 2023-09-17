import { DatepickerContextProvider } from "../Context/DatepickerContext";
import { useWorkoutModalContext } from "../Context/WorkoutModalContext";
import { WorkoutsContextProvider } from "../Context/WorkoutsContext";
import CallendarView from "./CallendarView/CallendarView";
import ListView from "./ListView/ListView";
import ModalView from "./WorkoutModalView/WorkoutModalView";
import style from "./appStyle.module.css";
import { useApp } from "./useApp";
function App() {
  const { showCallendar, switchView } = useApp();
  const { isOpen } = useWorkoutModalContext();
  return (
    <div className={style.mainContainer}>
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
    </div>
  );
}

export default App;
