import style from "./buttonStyle.module.css";

type ButtonTypes = "Confirm" | "Save" | "Cancel" | "Add";

const Button = (type: ButtonTypes, handler: () => void, buttonText: string = "") => {
  return (
    <button onClick={handler} className={`${style.myButton} ${style[`my${type}Button`]}`}>
      {buttonText !== "" ? buttonText : type}
    </button>
  );
};

export default Button;
