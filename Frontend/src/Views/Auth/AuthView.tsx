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
        <div className={[style.mainContainer, style.centeredGridMain].join(" ")}>
            <h1 className={style.h1}>{"Welcome" + (mode == "Login" ? " back!" : "")}</h1>
            <form
                className={
                    mode == "Login" ? style.centerGridFormLogin : style.centerGridFormRegister
                }
                onSubmit={logIn}
            >
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
                    `${mode == "Login" ? "Login →" : "Register"}`,
                    () => {},
                    () => {},
                    "submit",
                    "submit",
                    "Submit"
                )}
            </form>
            <div className={style.bottomText}>
                <p>
                    {mode === "Login"
                        ? "Don't have an account? "
                        : "With existing account try "}
                </p>
                <button className={style.logRegButton} onClick={changeMode}>
                    {mode === "Login" ? "Register for free" : "Login"}
                </button>
            </div>
        </div>
    );
}
