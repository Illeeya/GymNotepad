import { useDispatch } from "react-redux";
import Button from "../../Components/General/Button/Button";
import Input from "../../Components/General/Input/Input";
import style from "./authViewStyle.module.css";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../State";
import useAuthView from "./useAuthView";

export default function AuthView() {
    const dispatch = useDispatch();

    const { logIn } = bindActionCreators(actionCreators, dispatch);

    const { mode, changeMode } = useAuthView();

    return (
        <div className={[style.mainContainer, style.centerFlex].join(" ")}>
            <h1>{mode}</h1>
            <h1>↽⇁</h1>

            <form className={style.centerFlex} onSubmit={logIn}>
                {Input(
                    undefined,
                    () => {},
                    () => {},
                    "username",
                    "text",
                    "Username..."
                )}
                {mode === "Register" &&
                    Input(
                        undefined,
                        () => {},
                        () => {},
                        "email",
                        "email",
                        "Email..."
                    )}
                {Input(
                    undefined,
                    () => {},
                    () => {},
                    "password",
                    "password",
                    "Password..."
                )}
                {Input(
                    "Login",
                    () => {},
                    () => {},
                    "submit",
                    "submit",
                    "Submit"
                )}
            </form>

            <button onClick={changeMode}>{mode === "Login" ? "Register" : "Login"}</button>
        </div>
    );
}
