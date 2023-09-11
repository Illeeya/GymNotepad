import style from "./mainInfoStyle.module.css";

const MainInfo = () => {
  return (
    <div className={style.mainContainer}>
      <input
        className={`${style.generalInput} ${style.textInput}`}
        placeholder="Workout type..."
        type="text"
      />
      <input className={`${style.generalInput} ${style.dateInput}`} type="date" />
    </div>
  );
};

export default MainInfo;
