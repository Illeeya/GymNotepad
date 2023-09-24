import style from "./loaderStyle.module.css";
export const Loader = () => {
  return (
    <div className={style.loaderContainer}>
      <div className={style.loader}></div>
    </div>
  );
};
