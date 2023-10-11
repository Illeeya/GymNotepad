import { useState } from "react";

export default function useAuthView() {
    type modeType = "Login" | "Register";
    const [mode, setMode] = useState<modeType>("Login");

    function changeMode() {
        setMode((prev) => (prev === "Login" ? "Register" : "Login"));
    }

    return { mode, changeMode };
}
