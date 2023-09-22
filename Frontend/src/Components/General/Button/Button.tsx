import style from "./buttonStyle.module.css";

type ButtonTypes = "Confirm" | "Save" | "Cancel" | "Add";

const Button = (type: ButtonTypes, handler: () => void) => {
  return (
    <button onClick={handler} className={`${style.myButton} ${style[`my${type}Button`]}`}>
      {type}
    </button>
  );
};

export default Button;
