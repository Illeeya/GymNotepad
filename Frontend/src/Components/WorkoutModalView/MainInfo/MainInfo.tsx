import style from "./mainInfoStyle.module.css";
import useMainInfo from "./useMainInfo";

const MainInfo = () => {
    const { workoutType, workoutDate, handleDataChange } = useMainInfo();

    return (
        <div className={style.mainContainer}>
            <input
                className={`${style.generalInput} ${style.textInput}`}
                placeholder="Workout type..."
                type="text"
                value={workoutType}
                onChange={handleDataChange}
                name="type"
            />
            <input
                className={`${style.generalInput} ${style.dateInput}`}
                type="date"
                value={workoutDate}
                onChange={handleDataChange}
                name="date"
            />
        </div>
    );
};

export default MainInfo;
