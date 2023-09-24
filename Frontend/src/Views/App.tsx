import { useSelector } from "react-redux";
import CallendarView from "./CallendarView/CallendarView";
import ListView from "./ListView/ListView";
import ModalView from "./WorkoutModalView/WorkoutModalView";
import style from "./appStyle.module.css";
import { useApp } from "./useApp";
import { State } from "../State/Reducers";
import { Loader } from "./Loader/Loader";
function App() {
  const { showCallendar, switchView } = useApp();
  const isModalOpen = useSelector((state: State) => state.workoutModal.isOpen);
  const isDataLoaded = useSelector((state: State) => state.workouts.isLoaded);

  return (
    <div className={style.mainContainer}>
      {isModalOpen ? (
        <ModalView />
      ) : (
        <>
          <button className={style.switchButton} onClick={() => switchView()}>
            {showCallendar ? "Workout List" : "Workout Callendar"}
          </button>
          {!isDataLoaded ? (
            <Loader />
          ) : showCallendar ? (
            <CallendarView></CallendarView>
          ) : (
            <ListView></ListView>
          )}
        </>
      )}
    </div>
  );
}

export default App;
