import { useSelector } from "react-redux";
import style from "./appStyle.module.css";
import { State } from "../State/Reducers";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import MainView from "./Main/MainView";
import AuthView from "./Auth/AuthView";
function App() {
    const loggedIn = useSelector((state: State) => state.authentication.loggedIn);

    return (
        <div className={style.mainContainer}>
            {loggedIn ? <MainView /> : <AuthView />}
            {/* {isModalOpen ? (
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
            )} */}
            <ToastContainer />
        </div>
    );
}

export default App;
