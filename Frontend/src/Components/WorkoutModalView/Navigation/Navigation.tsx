import Button from "../../General/Button/Button";
import style from "./navigationStyle.module.css";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../State";

const Navigation = () => {
  const dispatch = useDispatch();

  const { toggleModal } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className={style.navigationContainer}>
      {Button("Cancel", toggleModal)}
      {Button("Save", toggleModal)}
    </div>
  );
};

export default Navigation;
