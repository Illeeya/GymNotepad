import { toast } from "react-toastify";

export default function ListView() {
  return (
    <div className="listViewMainContainer">
      <button onClick={() => toast.error("qwe")}>qwe</button>
    </div>
  ); // classname='newModuleMainContainer'
}
